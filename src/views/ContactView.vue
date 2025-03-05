<template>
  <!-- Modal -->
  <Modal v-if="modal.showModalState.value"
    @close-modal="modal.closeModal"
    :title="modalData.title"
    :message="modalData.message"
  >
    <button
      @click="modal.closeModal"
      class="mt-6 w-full font-semibold rounded-xl space-x-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white transition-colors transition-all"
    >
      Close Modal
    </button>
  </Modal>

  <div class="mt-8 p-6">
    <!-- Formulario de contacto -->
    <h1 class="text-4xl font-bold">Contacto</h1>
    <p class="mt-6 text-gray-500">Aquí puedes ponerte en contacto conmigo.</p>

    <section class="bg-transparent">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="rounded-lg p-8 shadow-sm shadow-gray-500 lg:col-span-3 lg:p-12">
            <form @submit.prevent="sendEmail" class="space-y-4">
              <div>
                <label for="name" class="text-sm font-medium text-gray-700">Nombre</label>
                <input
                  class="w-full rounded-lg border border-gray-600 hover:border-none outline-none focus:border-none focus:ring-1 focus:ring-blue-600 p-3 text-sm"
                  placeholder="Nombre"
                  type="text"
                  v-model="form.name"
                  id="name"
                  required
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="email" class="text-sm font-medium text-gray-700">Correo electrónico</label>
                  <input
                    class="w-full rounded-lg border border-gray-600 hover:border-none outline-none focus:border-none focus:ring-1 focus:ring-blue-600 p-3 text-sm"
                    placeholder="Correo electrónico"
                    type="email"
                    v-model="form.email"
                    id="email"
                    required
                  />
                </div>

                <div>
                  <label for="phone" class="text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    class="w-full rounded-lg border hover:border-none outline-none focus:border-none focus:ring-1 focus:ring-blue-600 p-3 text-sm"
                    placeholder="Número de teléfono"
                    type="tel"
                    v-model="form.phone"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="text-sm font-medium text-gray-700">Asunto</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="w-full rounded-lg border outline-none hover:border-none focus:border-none focus:ring-1 focus:ring-blue-600 p-3 text-sm"
                  required
                >
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="consulta-general">Consulta General</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="colaboracion">Colaboración</option>
                </select>
              </div>

              <div>
                <label for="message" class="text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  class="w-full rounded-lg border-red-400 border outline-none focus:border-none focus:ring-1 focus:ring-blue-600 p-3 text-sm"
                  placeholder="Mensaje"
                  rows="8"
                  v-model="form.message"
                  id="message"
                  required
                ></textarea>
              </div>

              <div class="mt-6">
                <button type="submit">
                  <v-btn variant="outlined" color="indigo" v-ripple>
                    Enviar
                  </v-btn>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!--
    <button
      @click="modal.showModal"
      class="border border-indigo-500 bg-indigo-500 rounded font-normal px-3 py-2 text-white hover:bg-indigo-400"
    >
      Show Modal
    </button>
  -->

    <p class="text-xl font-bold my-8">Puedes contactarme en mis redes sociales:</p>
    <SocialLinks />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { VBtn } from 'vuetify/lib/components/index.mjs';
import SocialLinks from '@/components/SocialLinks.vue';
import Modal from '@/components/Modal.vue';
import { useModal } from '@/composables/useModal';

// Inicializamos el composable que maneja el estado del modal
const modal = useModal();

const modalData = ref({
  title: 'Title por defecto!',
  message: 'Este es un message por defecto',
});

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

// Función para enviar el correo electrónico
const sendEmail = async () => {
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    subject: form.value.subject,
    message: form.value.message
  };

  try {
    // Verificar datos
    console.log(templateParams);

    // Enviar el correo electrónico usando EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,  // ID del servicio de EmailJS
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ID de la plantilla de correo
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID      // ID de usuario de EmailJS
    );
    
    // Actualizar título y mensaje del modal
    modalData.value = {
      title: '¡Mensaje enviado exitosamente!',
      message: 'Espera a mi respuesta, ¡Gracias por contactarme!'
    };
    


    // Limpiar el formulario después de enviar
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    // En caso de error, actualizar el modal
    modalData.value = {
      title: 'Hubo un error al enviar el mensaje',
      message: '¡Lo siento!, Por favor, inténtalo de nuevo.'
    };
    console.error('Error al enviar el formulario de contacto: ', error);
  }

  modal.showModal();

};
</script>

// src/plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // 👈 Importar iconos MDI

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,  // 👈 Registra los componentes de Vuetify
  directives   // 👈 Registra las directivas de Vuetify
})

export default vuetify

import { ref, watchEffect } from 'vue'

const THEME_KEY = 'theme-preference'

export function useTheme() {
  const theme = ref(localStorage.getItem(THEME_KEY) || 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem(THEME_KEY, theme.value)
    applyTheme()
  }

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  watchEffect(applyTheme)

  return { theme, toggleTheme }
}

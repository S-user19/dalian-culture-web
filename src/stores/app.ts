import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarVisible = ref(false)
  const highContrast = ref(false)
  const fontSize = ref<'normal' | 'large' | 'xlarge'>('normal')
  const largeCursor = ref(false)
  const plainTextMode = ref(false)
  const largeSubtitle = ref(false)

  const toggleSidebar = () => {
    sidebarVisible.value = !sidebarVisible.value
  }

  const closeSidebar = () => {
    sidebarVisible.value = false
  }

  const toggleHighContrast = () => {
    highContrast.value = !highContrast.value
    document.documentElement.classList.toggle('high-contrast', highContrast.value)
  }

  const setFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    fontSize.value = size
    document.documentElement.classList.remove('font-normal', 'font-large', 'font-xlarge')
    document.documentElement.classList.add(`font-${size}`)
  }

  const toggleLargeCursor = () => {
    largeCursor.value = !largeCursor.value
    document.documentElement.classList.toggle('large-cursor', largeCursor.value)
  }

  const togglePlainTextMode = () => {
    plainTextMode.value = !plainTextMode.value
    document.documentElement.classList.toggle('plain-text-mode', plainTextMode.value)
  }

  const toggleLargeSubtitle = () => {
    largeSubtitle.value = !largeSubtitle.value
    document.documentElement.classList.toggle('large-subtitle', largeSubtitle.value)
  }

  const currentYear = computed(() => new Date().getFullYear())

  return {
    sidebarVisible,
    highContrast,
    fontSize,
    largeCursor,
    plainTextMode,
    largeSubtitle,
    toggleSidebar,
    closeSidebar,
    toggleHighContrast,
    setFontSize,
    toggleLargeCursor,
    togglePlainTextMode,
    toggleLargeSubtitle,
  }
})

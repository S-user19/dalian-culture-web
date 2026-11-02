import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarVisible = ref(false)
  const highContrast = ref(false)
  const fontSize = ref<'normal' | 'large' | 'xlarge'>('normal')

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

  const currentYear = computed(() => new Date().getFullYear())

  return {
    sidebarVisible,
    highContrast,
    fontSize,
    currentYear,
    toggleSidebar,
    closeSidebar,
    toggleHighContrast,
    setFontSize,
  }
})

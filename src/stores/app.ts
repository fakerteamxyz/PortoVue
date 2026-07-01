import { shallowRef, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const hover = ref<(HTMLElement | string)[]>([])
  const backgroundTransition = shallowRef<HTMLElement | null>(null)
  const lastVisitedPage = shallowRef<HTMLElement | null>(null)
  const aboutPageIcon = shallowRef<HTMLElement | null>(null)
  const menuBag = shallowRef<HTMLElement | null>(null)
  const menuListHeight = ref(0)
  const navList = shallowRef<HTMLElement | null>(null)

  return {
    hover,
    backgroundTransition,
    lastVisitedPage,
    aboutPageIcon,
    menuBag,
    menuListHeight,
    navList
  }
})

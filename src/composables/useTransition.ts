import { useAppStore } from '@/stores/app'

export function useTransition() {
  const store = useAppStore()

  function pageTransition() {
    store.backgroundTransition?.classList.toggle('show')
    setTimeout(() => {
      store.backgroundTransition?.classList.toggle('show')
    }, 1500)
  }

  function menuBackgroundAnim(index: number) {
    const navList = store.navList
    store.lastVisitedPage?.classList.remove('active')

    const children = navList?.children
    if (!children) return

    const newPage = children[index + 1] as HTMLElement | undefined
    if (newPage) {
      store.lastVisitedPage = newPage
      newPage.classList.add('active')
      const firstChild = newPage.children[0] as HTMLElement | undefined
      if (firstChild) firstChild.classList.add('active')
    }

    const firstChild = children[0] as HTMLElement
    if (firstChild) {
      firstChild.style.transform = `translateY(${index * store.menuListHeight}px)`
    }

    pageTransition()
  }

  return { pageTransition, menuBackgroundAnim }
}

export function useClickAway(callback: () => void): {
  addClickAwayListener: (el: HTMLElement | undefined) => void
  removeClickAwayListener: (el: HTMLElement | undefined) => void
} {
  function clickedOutside(el: HTMLElement | undefined, event: MouseEvent) {
    if (el && !(el == event.target || el?.contains(event.target))) {
      callback()
    }
  }

  return {
    addClickAwayListener: (el) =>
      document.addEventListener('click', (event: MouseEvent) =>
        clickedOutside(el, event)
      ),
    removeClickAwayListener: (el) =>
      document.removeEventListener('click', (event: MouseEvent) =>
        clickedOutside(el, event)
      ),
  }
}

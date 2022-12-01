import type { ComputedRef } from 'vue'

export interface VueSelectContext {
  uid: string | number | undefined
  dropdownOpen: boolean
  typeAheadPointer: number
  setTypeAheadPointer: (index: number) => void
  isOptionDeselectable: (option: VueSelectOption) => boolean
  isOptionSelected: (option: VueSelectOption) => boolean
  onMousedown: (e: MouseEvent) => void
  onMouseup: (e: MouseEvent) => void
  select: (option: VueSelectOption) => void
  setDropdownMenuEl: (el: HTMLElement | null) => void
  registerSelectableEl: (el: HTMLElement | null) => void
  unRegisterSelectableEl: (el: HTMLElement | null) => void
}

export type InjectedVueSelectContext = ComputedRef<VueSelectContext>

export type VueSelectOption = unknown

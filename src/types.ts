import type { ComputedRef } from 'vue'

export interface DropdownMenuContext {
  uid: string | number | undefined
  dropdownOpen: boolean
  onMousedown: (e: MouseEvent) => void
  onMouseup: (e: MouseEvent) => void
  setDropdownMenuEl: (el: HTMLElement | null) => void
}
export type InjectedDropdownMenuContext = ComputedRef<DropdownMenuContext>

export interface DropdownMenuItemContext {
  uid: DropdownMenuContext['uid']
  typeAheadPointer: number
  setTypeAheadPointer: (index: number) => void
  isOptionDeselectable: (option: VueSelectOption) => boolean
  isOptionSelected: (option: VueSelectOption) => boolean
  getOptionKey: (option: VueSelectOption) => unknown
  filteredOptionKeys: VueSelectOptionKey[]
  select: (option: VueSelectOption) => void
  selectable: (option: VueSelectOption) => boolean
}
export type InjectedDropdownMenuItemContext =
  ComputedRef<DropdownMenuItemContext>

export type VueSelectOption = unknown
export type VueSelectOptionKey = unknown

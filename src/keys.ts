import type { InjectionKey } from 'vue'
import type { ResolvedListBoxProps } from '@/types'

export const ListBoxKey: InjectionKey<ResolvedListBoxProps> = Symbol(
  'ListBoxInjectionKey',
)

export const ListBoxOptionInjectionKey = Symbol() as InjectionKey<string>

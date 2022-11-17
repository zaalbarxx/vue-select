<script setup lang="ts">
import { ListBoxInjectionKey } from '@/keys'
import type { ComputedRef, PropType } from 'vue'
import { provide, defineEmits, computed, reactive, watch } from 'vue'

export interface ListBoxProps {
  modelValue: PropType<unknown>
  open?: boolean | undefined
}
export interface ResolvedListBoxProps extends Omit<ListBoxProps, 'open'> {
  open: boolean
}
export type InjectedListBoxProps = ComputedRef<ResolvedListBoxProps>

const emit = defineEmits(['update:modelValue', 'update:open', 'open', 'close'])

const props = withDefaults(defineProps<ListBoxProps>(), {
  open: undefined,
})

const mutableState = reactive<{
  open: boolean
}>({
  open: props.open === undefined ? false : props.open,
})

watch(
  () => mutableState.open,
  (open) => emit('update:open', open)
)

const isOpen = computed<boolean>(() => {
  if (props.open !== undefined) {
    return props.open
  }
  return mutableState.open
})

provide<InjectedListBoxProps>(
  ListBoxInjectionKey,
  computed<ResolvedListBoxProps>(() => ({
    open: isOpen.value,
    modelValue: props.modelValue,
  }))
)
</script>

<template>
  <button
    tabindex="0"
    type="button"
    aria-haspopup="true"
    :aria-expanded="open"
    @click.exact="mutableState.open = !mutableState.open"
  >
    <slot></slot>
  </button>
</template>

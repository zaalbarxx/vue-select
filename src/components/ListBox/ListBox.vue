<script setup lang="ts">
import { ListBoxInjectionKey } from '@/keys.js'
import type { ComputedRef, PropType } from 'vue'
import { provide, defineEmits, computed, ref } from 'vue'

export interface ListBoxProps {
  modelValue: PropType<unknown>
  open?: boolean
}

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<ListBoxProps>(), {
  open: false,
})

export type ComputedListBoxInjectionProps = ComputedRef<ListBoxProps>

provide<ComputedListBoxInjectionProps>(
  ListBoxInjectionKey,
  computed<ListBoxProps>(() => ({
    open: props.open,
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
    @click.exact="open = !open"
  >
    <slot></slot>
  </button>
</template>

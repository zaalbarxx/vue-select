<script setup lang="ts">
import { inject } from 'vue'
import { ListBoxKey } from '@/keys'

withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'button',
  },
)

const listBoxProps = inject(ListBoxKey)
</script>

<template>
  <Component
    :is="as"
    tabindex="0"
    type="button"
    aria-haspopup="true"
    :aria-expanded="listBoxProps.open"
    @click="listBoxProps.toggleOpen"
  >
    <slot></slot>
  </Component>
</template>

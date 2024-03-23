<script setup lang="ts">
import { defineProps, inject } from 'vue'
import { ListBoxKey } from '@/keys'

withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'div',
  },
)

const listBoxProps = inject(ListBoxKey)
</script>

<template>
  <Component :is="as" v-show="listBoxProps.open">
    <slot></slot>
  </Component>
</template>

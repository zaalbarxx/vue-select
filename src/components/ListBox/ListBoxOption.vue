<script setup lang="ts">
import { defineProps } from 'vue'

withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'div',
  }
)
</script>

<template>
  <Component :is="as">
    <slot></slot>
  </Component>
</template>

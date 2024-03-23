<script setup lang="ts">
import { computed, defineProps, inject } from 'vue'
import { ListBoxKey } from '@/keys'

const props = withDefaults(
  defineProps<{
    as?: string
    value: unknown
  }>(),
  {
    as: 'div',
  },
)

const listBoxProps = inject(ListBoxKey)

const isSelected = computed(() => {
  return listBoxProps?.value.modelValue === props.value
})
</script>

<template>
  <Component :is="as" @click="() => listBoxProps.setModelValue(value)">
    <slot v-bind="{ isSelected }"></slot>
  </Component>
</template>

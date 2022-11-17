<script setup lang="ts">
import { defineProps, inject } from 'vue'
import { ListBoxInjectionKey } from '@/keys'
import type { InjectedListBoxProps } from '@/components/ListBox/ListBox.vue'

withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'div',
  }
)

const listBoxProps = inject<InjectedListBoxProps>(ListBoxInjectionKey)
</script>

<template>
  <Component :is="as" v-show="listBoxProps.open">
    <slot></slot>
  </Component>
</template>

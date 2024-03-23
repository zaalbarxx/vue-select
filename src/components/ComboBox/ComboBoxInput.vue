<script setup lang="ts">
import { inject } from 'vue'
import { ListBoxKey } from '@/keys'

const listBoxProps = inject(ListBoxKey)
</script>

<template>
  <input
    type="search"
    @input="({ target }) => listBoxProps?.setInputText(target.value)"
  />
</template>

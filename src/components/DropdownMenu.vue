<script setup lang="ts">
import { inject } from 'vue'
import vAppendToBody from '@/directives/appendToBody.js'
import { VueSelectInjectionKey } from '@/symbols'
import type { VueSelectInjectedProps } from '@/components/Select.vue'

const context = inject<VueSelectInjectedProps>(VueSelectInjectionKey)
</script>

<template>
  <ul
    v-if="context.dropdownOpen"
    :id="`vs${context.uid}__listbox`"
    ref="dropdownMenu"
    :key="`vs${context.uid}__listbox`"
    v-append-to-body
    class="vs__dropdown-menu"
    role="listbox"
    tabindex="-1"
    @mousedown.prevent="context.onMousedown"
    @mouseup="context.onMouseUp"
  >
    <slot></slot>
  </ul>
  <ul
    v-else
    :id="`vs${context.uid}__listbox`"
    role="listbox"
    style="display: none; visibility: hidden"
  ></ul>
</template>

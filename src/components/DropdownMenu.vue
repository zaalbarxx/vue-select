<script setup lang="ts">
import { inject, onMounted, ref, watch } from 'vue'
import vAppendToBody from '@/directives/appendToBody.js'
import { VueSelectInjectionKey } from '@/symbols'
import type { InjectedVueSelectContext } from '@/types'

const context = inject<InjectedVueSelectContext>(VueSelectInjectionKey)
const dropdownMenu = ref<HTMLElement | null>(null)

onMounted(() => {
  if (dropdownMenu.value) {
    context?.value.setDropdownMenuEl(dropdownMenu.value)
  }
})

watch(
  () => context?.value.dropdownOpen,
  (open) => {
    if (open) {
      context?.value.setDropdownMenuEl(dropdownMenu.value)
    }
  }
)

withDefaults(defineProps<{ as?: string }>(), { as: 'ul' })
</script>

<template>
  <Component
    :is="as"
    v-show="context.dropdownOpen"
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
    <!--  TODO: not sure why, but using the previous system of swapping the dropdown el at open causes performance to drop drastically with Vue dev tools open -->
    <!--  <Component-->
    <!--    :is="as"-->
    <!--    v-if="context.dropdownOpen"-->
    <!--    :id="`vs${context.uid}__listbox`"-->
    <!--    ref="dropdownMenu"-->
    <!--    :key="`vs${context.uid}__listbox`"-->
    <!--    v-append-to-body-->
    <!--    class="vs__dropdown-menu"-->
    <!--    role="listbox"-->
    <!--    tabindex="-1"-->
    <!--    @mousedown.prevent="context.onMousedown"-->
    <!--    @mouseup="context.onMouseUp"-->
    <!--  >-->
    <!--    <slot></slot>-->
    <!--  </Component>-->
    <!--  <Component-->
    <!--    :is="as"-->
    <!--    v-else-->
    <!--    :id="`vs${context.uid}__listbox`"-->
    <!--    role="listbox"-->
    <!--    style="display: none; visibility: hidden"-->
    <!--  ></Component>-->
  </Component>
</template>

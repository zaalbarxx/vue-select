<script setup lang="ts">
import Button from '~/components/Button.vue'
import TimelineSvg from '~/components/TimelineSvg.vue'
</script>

<template>
  <div
    class="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]"
  >
    <div class="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12"
      >
        <div class="relative z-10 md:text-center lg:text-left">
          <img
            alt=""
            src="~/assets/img/blur-cyan.png"
            decoding="async"
            class="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
            width="530"
            height="530"
          />
          <div class="relative">
            <p
              class="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent"
            >
              The complete Vue.js combobox solution.
            </p>
            <p class="mt-3 text-2xl tracking-tight text-slate-400">
              Everything you wish <code>&lt;select&gt;</code> could do, wrapped
              up in a lightweight, extendable Vue component.
            </p>
            <div class="mt-8 flex gap-4 md:justify-center lg:justify-start">
              <Button variant="primary"> Get started </Button>
              <Button
                to="https://github.com/sagalbot/vue-select"
                variant="secondary"
                target="_blank"
              >
                View on Github
              </Button>
            </div>
          </div>
        </div>
        <div class="relative lg:static xl:pl-10">
          <div
            class="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"
          >
            <TimelineSvg
              class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"
            />
          </div>
          <div class="relative">
            <img
              alt=""
              src="~/assets/img/blur-cyan.png"
              decoding="async"
              class="absolute -top-64 -right-64"
              width="530"
              height="530"
            /><img
              alt=""
              src="~/assets/img/blur-indigo.png"
              decoding="async"
              class="absolute -bottom-40 -right-44"
              width="567"
              height="567"
            />
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"
            ></div>
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10"
            ></div>
            <div
              class="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur"
            >
              <div
                class="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0"
              ></div>
              <div
                class="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0"
              ></div>
              <div class="pl-4 pt-4">
                <div class="mt-6 flex items-start px-1 text-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

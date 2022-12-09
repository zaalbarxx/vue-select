## Yarn / NPM

Install with yarn or npm:

```bash
# Yarn
yarn add vue-select@beta

# NPM
npm install vue-select@beta
```

Next you'll import and register the component. You can register the component globally or locally. *Unsure what this means? Check the [VueJS docs on component registration](https://vuejs.org/guide/components/registration.html#component-registration)
.*

### Global Registration

```js
import { createApp } from "vue";
import vSelect from "vue-select";

const app = createApp({});

app.component('vSelect', vSelect);
```

### Local Registration

```vue
<script>
import vSelect from 'vue-select'

export default {
  components: { vSelect }
}
</script>

<template>
  <vSelect />
</template>
```

### CSS

The component itself does not include any CSS. You'll need to include it separately:

```js
import 'vue-select/dist/vue-select.css';
```

## In the Browser

vue-select ships as an UMD module that is accessible in the browser. When loaded
in the browser, you can access the component through the `VueSelect.VueSelect`
global variable. You'll need to load Vue.js, vue-select JS & vue-select CSS.

```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<!-- use the latest vue-select release -->
<script src="https://unpkg.com/vue-select@latest"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-select@latest/dist/vue-select.css">

<!-- or point to a specific vue-select release -->
<script src="https://unpkg.com/vue-select@4.0.0"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-select@4.0.0/dist/vue-select.css">
```

Then register the component in your javascript:

```js
Vue.component('v-select', VueSelect.VueSelect);
```

::code-pen
---
url: dJjzeP
---

## Vue Compatibility

You're currently reading the docs for version 4 of Vue Select, which is designed for Vue 3.

| Vue  | Vue Select | Docs                      |
|------|------------|---------------------------|
| ^2.3 | 3.0        | https://v3.vue-select.org |
| ^3.0 | 4.0        | https://vue-select.org    |

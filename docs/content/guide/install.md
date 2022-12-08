## Yarn / NPM

Install with yarn or npm:

```bash
# Yarn
yarn add vue-select@beta

# NPM
npm install vue-select@beta
```

Next you'll import and register the component. You can register the component globally or locally. *
Unsure what this means? Check
the [VueJS docs on component registration](https://vuejs.org/guide/components/registration.html#component-registration)
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
<script src="https://unpkg.com/vue-select@3.0.0"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-select@3.0.0/dist/vue-select.css">
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

| Vue  | Vue Select | Notes                                                                      |
|------|------------|----------------------------------------------------------------------------|
| ^2.3 | 3.x        | The 3.x branch of Vue Select supports Vue 2.3 and above. View the v3 docs. |
| ^3.0 | 4.0-beta   | The latest version of Vue Select for Vue 3 applications.                   |

## Default Dropdown Behaviour

By default, the dropdown will open anytime the underlying search input has focus. The dropdown will
open when clicked, or when it has received focus when tabbing through inputs.

## Customizing Dropdown Behaviour <Badge text="v4+" />

The `open` prop can control showing and hiding the dropdown menu from a parent component. If this prop is set, the component will always use the value of `props.open` to handle showing and hiding the dropdown. Vue Select will emit the `update:open` when the prop value should change, so you can use `<VueSelect v-model:open="open" />` to have control over the `open` state while preserving default behaviour.

#### Example: Open the dropdown when search text is present
--- 

In this example, we will wait to show the dropdown until the user has started typing. However, if a
country has already been selected, we will display the dropdown right away.

<OpenWhenSearchTextPresent />

<<< @/.vuepress/components/OpenWhenSearchTextPresent.vue


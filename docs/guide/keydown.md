### Customizing Keydown Behaviour
---

## selectOnKeyCodes <Badge text="v3.3.0+" />

`selectOnKeyCodes {Array}` is an array of keyCodes that will trigger a typeAheadSelect. Any keyCodes
in this array will prevent the default event action and trigger a typeahead select. By default,
it's just `[13]` for return. For example, maybe you want to tag on a comma keystroke:

<TagOnComma /> 

<<< @/.vuepress/components/TagOnComma.vue

## mapKeyDown <Badge text="v3.3.0+" />

Vue Select provides the `mapKeyDown` Function prop to allow for customizing the components response
to
keydown events while the search input has focus.

```js
/**
 * @param map {Object} Mapped keyCode to handlers { <keyCode>:<callback> }
 * @param vm {VueSelect}
 * @return {Object}
 */
(map, vm) => map,
```

By default, the prop is a no–op returning the same object `map` object it receives. This object
maps keyCodes to handlers: `{ <keyCode>: <callback> }`. Modifying this object can override default
functionality, or add handlers for different keys that the component doesn't normally listen for.

Note that any keyCodes you've added to `selectOnKeyCodes` will be passed to `mapKeyDown` as well,
so `mapKeyDown` will always take precedence.

**Default Handlers**

```js
const defaults = {
    //  backspace
    8: (e) => this.maybeDeleteValue(),
    //  tab
    9: (e) => this.onTab(),
    //  esc
    27: (e) => this.onEscape(),
    //  up.prevent
    38: (e) => {
        e.preventDefault()
        if (!this.open) {
            this.open = true
            return
        }
        return this.typeAheadUp()
    },
    //  down.prevent
    40: (e) => {
        e.preventDefault()
        if (!this.open) {
            this.open = true
            return
        }
        return this.typeAheadDown()
    },
}
```

### Example: Autocomplete Email Addresses

This is example listens for the `@` key, and autocompletes an email address with `@gmail.com`.

<CustomHandlers />

<<< @/.vuepress/components/CustomHandlers.vue

## mapKeyPress <Badge text="v3.21+" />

`mapKeyPress` prop is identical in functionality to `mapKeyDown`, but it's called on `keypress`
events instead of `keydown`. The keypress event is used to detect space bar presses when the input
has focus, and the menu is closed.

```js
 const defaults = {
    //  space
    32: (e) => {
        if (!this.open) {
            e.preventDefault()
            this.open = true
        }
    },
}
```

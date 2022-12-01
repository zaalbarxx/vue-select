export default {
  props: {
    autoscroll: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    typeAheadPointer() {
      if (this.autoscroll) {
        this.maybeAdjustScroll()
      }
    },
    open(open) {
      if (this.autoscroll && open) {
        this.$nextTick(() => this.maybeAdjustScroll())
      }
    },
  },

  methods: {
    setTypeAheadPointer(index) {
      this.typeAheadPointer = index
    },

    /**
     * Adjust the scroll position of the dropdown list
     * if the current pointer is outside of the
     * overflow bounds.
     * @returns {*}
     */
    maybeAdjustScroll() {
      const optionEl =
        this.dropdownMenuEl?.children[this.typeAheadPointer] || false

      if (optionEl) {
        const bounds = this.getDropdownViewport()
        const { top, bottom, height } = optionEl.getBoundingClientRect()

        if (top < bounds.top) {
          return (this.dropdownMenuEl.scrollTop = optionEl.offsetTop)
        } else if (bottom > bounds.bottom) {
          return (this.dropdownMenuEl.scrollTop =
            optionEl.offsetTop - (bounds.height - height))
        }
      }
    },

    /**
     * The currently viewable portion of the dropdownMenu.
     * @returns {{top: (string|*|number), bottom: *}}
     */
    getDropdownViewport() {
      return this.dropdownMenuEl
        ? this.dropdownMenuEl.getBoundingClientRect()
        : {
            height: 0,
            top: 0,
            bottom: 0,
          }
    },
  },
}

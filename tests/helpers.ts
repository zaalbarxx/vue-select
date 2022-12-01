import { mount, VueWrapper } from '@vue/test-utils'
import VueSelect from '@/components/Select.vue'

type WrappedVueSelect = VueWrapper<InstanceType<typeof VueSelect>>

/**
 * Trigger a submit event on the search
 * input with a provided search text.
 */
export const searchSubmit = async (
  Wrapper: WrappedVueSelect,
  searchText?: string
) => {
  await Wrapper.get('input').trigger('focus')

  if (searchText) {
    Wrapper.vm.search = searchText
    await Wrapper.vm.$nextTick()
  }

  await Wrapper.get('input').trigger('keydown.enter')
}

/**
 * Focus the search input
 */
export const searchFocus = async (Wrapper: WrappedVueSelect) => {
  await Wrapper.get('input').trigger('focus')
  await Wrapper.vm.$nextTick()
}

/**
 * Focus the input, enter some search text, hit return.
 */
export const selectTag = async (
  Wrapper: WrappedVueSelect,
  searchText: string
) => {
  Wrapper.vm.$refs.search.focus()
  await Wrapper.vm.$nextTick()

  Wrapper.vm.search = searchText
  await Wrapper.vm.$nextTick()

  await Wrapper.get('input').trigger('keydown.enter')
}

/**
 * Create a new VueSelect instance with
 * a provided set of props.
 */
export const selectWithProps = (props = {}): WrappedVueSelect => {
  return mount(VueSelect, { props })
}

/**
 * Returns a Wrapper with a v-select component.
 */
export const mountDefault = (props = {}, options = {}): WrappedVueSelect => {
  return mount(VueSelect, {
    props: {
      options: ['one', 'two', 'three'],
      ...props,
    },
    ...options,
  })
}

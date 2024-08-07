<template>
  <!-- eslint-disable vue/no-unused-vars  -->
  <v-select :options="books" label="title">
    <template
      #selected-options-container="{ selectedValue, multiple }"
    >
      <div class="vs__selected">
        <span>{{ selectedValue[0].title }}></span>
        <span v-if="multiple && selectedValue.length > 1">(+{{selectedValue.length  - 1}})</span>
      </div>
    </template>
  </v-select>
</template>

<script>
export default {
  data: () => ({
    books: [
      {
        title: "Old Man's War",
        author: {
          firstName: 'John',
          lastName: 'Scalzi',
        },
      },
    ],
  }),
}
</script>

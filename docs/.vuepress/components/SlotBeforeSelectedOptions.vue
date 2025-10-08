<template>
  <v-select v-model="selected" :options="books" label="title">
    <template #before-selected-options>
      <div style="display: flex; align-items: baseline">
        <strong>Label before</strong>
      </div>
    </template>
  </v-select>
</template>

<script>
const book = {
  title: "Old Man's War",
  author: {
    firstName: 'John',
    lastName: 'Scalzi',
  },
}
export default {
  data: () => ({
    books: [book],
    selected: book,
  }),
}
</script>

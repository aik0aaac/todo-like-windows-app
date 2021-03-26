<template>
  {{ data.name }}
  <button @click="remove(data)">Remove</button>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

import { categoryKey } from "@/store/category/index";

export default defineComponent({
  name: "CategoryItem",
  components: {},
  props: {
    data: {
      type: Object,
    },
  },

  setup(props) {
    // Store情報をInject
    const store = inject(categoryKey);
    if (!store) {
      throw new Error("");
    }
    const remove = store.removeCategory;

    return { remove, props };
  },
});
</script>

<style lang="sass" scoped></style>

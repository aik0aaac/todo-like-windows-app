<template>
  <!-- カテゴリ作成 -->
  <create-form class="create-form" />

  <!-- カテゴリ一覧 -->
  <ul class="tree-view">
    <li>
      Category
      <ul>
        <li v-for="(category, index) in store.state.categories" :key="index">
          <category-item :data="category" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

import CreateForm from "./CreateForm.vue";
import CategoryItem from "./CategoryItem.vue";

import { categoryKey } from "@/store/category/index";

export default defineComponent({
  name: "CategoryList",
  components: {
    CreateForm,
    CategoryItem,
  },

  setup() {
    // Store情報をInject
    const store = inject(categoryKey);
    if (!store) {
      throw new Error("");
    }

    return { store };
  },
});
</script>

<style lang="sass" scoped>
// 作成フォーム
.create-form
  margin-bottom: 8px

// カテゴリ一覧
.tree-view
  height: 82vh
</style>

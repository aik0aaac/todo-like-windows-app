<template>
  <div class="wrapper">
    <!-- カテゴリ一覧 -->
    <div class="category-list">
      <category-list />
    </div>

    <!-- タスク一覧 -->
    <div class="todo-list">
      <todo-list />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";

import CategoryList from "@/components/category/CategoryList.vue";
import TodoList from "@/components/todo/TodoList.vue";

import store, { categoryKey } from "@/store/category/index";

export default defineComponent({
  components: {
    TodoList,
    CategoryList,
  },
  setup() {
    provide(categoryKey, store);
    return {};
  },
});
</script>

<style lang="sass" scoped>
.wrapper
  display: flex

  // カテゴリとタスクの間のスペース
  $category-task-margin: 12px

  // カテゴリ一覧
  .category-list
    width: 26%
    margin-right: $category-task-margin
  // タスク一覧
  .todo-list
    width: calc(74% - #{$category-task-margin})
</style>

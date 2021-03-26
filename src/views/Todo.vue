<template>
  <!-- カテゴリ一覧 -->

  <!-- タスク一覧 -->
  <todo-list />
</template>

<script lang="ts">
import TodoList from "@/components/todo/TodoList.vue";

export default {
  components: {
    TodoList,
  },
};
</script>

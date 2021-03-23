<template>
  <!-- TODO作成フォーム -->
  <create-form @add-todo="addTodoAction" />

  <!-- TODO一覧 -->
  <ul class="todo-list">
    <!--TODO子アイテム -->
    <li v-for="(todo, index) in state.todoList" :key="index">
      <!-- チェックボックス、todo=チェック未状態/Done=チェック状態 -->
      <input type="checkbox" :checked="todo.state === 'done'" id="todo-name" />
      <!-- タスク名 -->
      <label id="todo-name">{{ todo.name }}</label>

      <complete-button
        :index="index"
        @complete-todo="completeTodoAction"
        v-if="todo.state !== 'done'"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { todoState } from "@/definition/todoState";
import { ITodoCreate, ITodo } from "@/@types/todo";
import { defineComponent, reactive } from "vue";
import CompleteButton from "./CompleteButton.vue";
import CreateForm from "./CreateForm.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    CreateForm,
    CompleteButton,
  },

  setup() {
    const state = reactive<{ todoList: Array<ITodo> }>({
      todoList: [
        {
          name: "test",
          state: todoState.todo.value,
          children: [],
          categoryId: 1,
        },
      ],
    });

    const addTodoAction = (data: ITodoCreate) => {
      state.todoList.push({
        name: data.name,
        state: todoState.todo.value,
        children: [],
        categoryId: 1,
      });
    };

    const completeTodoAction = (index: number) => {
      state.todoList[index].state = todoState.done.value;
    };

    return { state, addTodoAction, completeTodoAction };
  },
});
</script>

<style lang="sass" scoped>
// TODO一覧
.todo-list
  padding: 0
  list-style: none
</style>

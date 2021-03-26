<template>
  <!-- TODO作成フォーム -->
  <create-form @add-todo="addTodoAction" />

  <!-- TODO一覧 -->
  <ul class="todo-list">
    <!--TODO子アイテム -->
    <draggable class="dragArea list-group w-full" :list="state.todoList">
      <transition-group>
        <li
          v-for="(todo, index) in state.todoList"
          :key="index"
          :class="todo.isDone ? 'done task-card' : 'task-card'"
        >
          <!-- 親タスク -->
          <div class="task-parent-card">
            <div class="left-pain">
              <display-todo
                :data="todo"
                :id="todo.id"
                :childId="0"
                :isChild="false"
                @toggle-state="toggleStateAction"
              />
            </div>

            <div class="right-pain">
              <!-- 子タスク追加ボタン -->
              <add-child-button
                :id="todo.id"
                @add-child-task="addChildTaskAction"
              />
              <!-- タスク削除ボタン -->
              <remove-task-button
                :id="todo.id"
                @remove-task="removeTaskAction"
              />
            </div>
          </div>

          <!-- 子タスク -->
          <div class="task-children-card">
            <display-todo
              class="task-child-item"
              v-for="(child, childIndex) in todo.children"
              :key="childIndex"
              :data="child"
              :id="todo.id"
              :childId="child.id"
              :isChild="true"
              @toggle-state="toggleChildStateAction"
            />
          </div>
        </li>
      </transition-group>
    </draggable>
  </ul>
</template>

<script lang="ts">
import { ITodoCreate, ITodo } from "@/@types/todo";
import { defineComponent, reactive } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

import CreateForm from "./CreateForm.vue";
import DisplayTodo from "./DisplayTodo.vue";
import RemoveTaskButton from "./RemoveTaskButton.vue";
import AddChildButton from "./AddChildButton.vue";

import ManagementIdUtil from "@/utils/managementIdUtil";

export default defineComponent({
  name: "TodoList",
  components: {
    draggable: VueDraggableNext,
    CreateForm,
    DisplayTodo,
    RemoveTaskButton,
    AddChildButton,
  },

  setup() {
    const state = reactive<{ todoList: Array<ITodo> }>({
      todoList: [
        {
          id: ManagementIdUtil.generateId(),
          name: "Task 1",
          isDone: false,
          children: [
            {
              id: ManagementIdUtil.generateId(),
              name: "Child Task 1",
              isDone: false,
            },
          ],
          categoryId: 1,
        },
      ],
    });

    const addTodoAction = (data: ITodoCreate) => {
      state.todoList.push({
        id: ManagementIdUtil.generateId(),
        name: data.name,
        isDone: false,
        children: [],
        categoryId: 1,
      });
    };

    const toggleStateAction = (id: number) => {
      const index = state.todoList.findIndex((e) => e.id === id);
      state.todoList[index].isDone = !state.todoList[index].isDone;
    };

    const toggleChildStateAction = (id: number, childId: number) => {
      const index = state.todoList.findIndex((e) => e.id === id);
      const childIndex = state.todoList[index].children.findIndex(
        (e) => e.id === childId
      );
      state.todoList[index].children[childIndex].isDone = !state.todoList[index]
        .children[childIndex].isDone;
    };

    const removeTaskAction = (id: number) => {
      const index = state.todoList.findIndex((e) => e.id === id);
      state.todoList.splice(index, 1);
    };

    const addChildTaskAction = (id: number, name: string) => {
      const index = state.todoList.findIndex((e) => e.id === id);
      state.todoList[index].children.push({
        id: ManagementIdUtil.generateId(),
        name: name,
        isDone: false,
      });
    };

    return {
      state,
      addTodoAction,
      toggleStateAction,
      toggleChildStateAction,
      removeTaskAction,
      addChildTaskAction,
    };
  },
});
</script>

<style lang="sass" scoped>
// TODO一覧
.todo-list
  padding: 0
  list-style: none

  .task-card
    margin-bottom: 12px
    padding: 12px
    border-bottom: 1px solid rgba(0,0,0,.2)
    // 親タスク
    .task-parent-card
      display: flex
      // タスク右ペイン、左ペイン
      .left-pain
        width: 50%
        padding-top: 5px
      // タスク左ペイン
      .right-pain
        width: 50%
        text-align: right
    // 子タスク
    .task-children-card
      margin-top: 4px
      padding-left: 16px
      .task-child-item
        margin-bottom: 4px
</style>

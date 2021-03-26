<template>
  <div>
    <!-- ステート切り替えボタン -->
    <toggle-state-button
      :id="isChild ? childId : id"
      :isDone="data.isDone"
      @toggle-state="toggleStateAction"
      :is-child="isChild"
    />
    <!-- タスク名 -->
    <label
      :for="`todo-${isChild ? 'child' : 'parent'}${isChild ? childId : id}`"
      :class="data.isDone ? 'task-name done' : 'task-name'"
    >
      {{ data.name }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

import ToggleStateButton from "./ToggleStateButton.vue";

export default defineComponent({
  name: "DisplayTodo",
  components: {
    ToggleStateButton,
  },
  props: {
    data: {
      type: Object,
    },
    id: {
      type: Number,
    },
    childId: {
      type: Number,
    },
    isChild: {
      type: Boolean,
    },
  },

  setup(props, context: SetupContext) {
    const toggleStateAction = () => {
      context.emit("toggle-state", props.id, props.childId);
    };

    return { props, toggleStateAction };
  },
});
</script>

<style lang="sass" scoped>
// Doneとなったタスク
.done.task-name
  text-decoration: line-through
</style>

<template>
  <button @click="completed">Done</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

export default defineComponent({
  name: "CompleteButton",
  props: {
    index: {
      type: Number,
    },
  },

  setup(props, context: SetupContext) {
    const completed = () => {
      context.emit("complete-todo", props.index);
    };

    return { completed, props };
  },
});
</script>

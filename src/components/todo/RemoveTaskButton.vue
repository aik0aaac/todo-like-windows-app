<template>
  <button @click="removeTask" class="remove-button">Remove</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

export default defineComponent({
  name: "RemoveTaskButton",
  props: {
    id: {
      type: Number,
    },
  },

  setup(props, context: SetupContext) {
    const removeTask = () => {
      context.emit("remove-task", props.id);
    };

    return { removeTask, props };
  },
});
</script>

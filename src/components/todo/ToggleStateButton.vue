<template>
  <input
    type="checkbox"
    :id="`todo-${isChild ? 'child' : 'parent'}${id}`"
    @click="toggleState"
    :checked="isDone"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

export default defineComponent({
  name: "ToggleStateButton",
  props: {
    isDone: {
      type: Boolean,
    },
    id: {
      type: Number,
    },
    isChild: {
      type: Boolean,
    },
  },

  setup(props, context: SetupContext) {
    const toggleState = () => {
      context.emit("toggle-state", props.id);
    };

    return { toggleState, props };
  },
});
</script>

<template>
  <!-- <span class="field-row"> -->
  <input v-model="nameRef" type="text" class="add-child-input" />
  <button @click="addChildTask" class="add-child-button">Add Child</button>
  <!-- </span> -->
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from "vue";

export default defineComponent({
  name: "AddChildButton",
  props: {
    id: {
      type: Number,
    },
  },

  setup(props, context: SetupContext) {
    const nameRef = ref<string>("");

    const addChildTask = () => {
      // TODO名が空文字であれば何もしない
      if (nameRef.value === "") {
        return;
      }

      context.emit("add-child-task", props.id, nameRef.value);
      nameRef.value = "";
    };

    return { nameRef, addChildTask, props };
  },
});
</script>

<style lang="sass" scoped>
// 入力欄
.add-child-input
  margin-right: 8px
// 入力ボタン
.add-child-button
</style>

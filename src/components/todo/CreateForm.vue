<template>
  <div>
    <div class="field-row">
      <button @click="add">Add TODO</button>
      <input v-model="todoRef.name" type="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { ITodoCreate } from "@/@types/todo";
import { defineComponent, SetupContext, ref } from "vue";

export default defineComponent({
  name: "CreateForm",
  setup(props, context: SetupContext) {
    const todoRef = ref<ITodoCreate>({ name: "", categoryId: 1 });

    const add = () => {
      // TODO名が空文字であれば何もしない
      if (todoRef.value.name === "") {
        return;
      }

      // 親コンポーネントにemit経由で情報伝達
      context.emit("add-todo", todoRef.value);
      todoRef.value = {
        name: "",
        categoryId: 1,
      };
    };

    return { add, todoRef };
  },
});
</script>

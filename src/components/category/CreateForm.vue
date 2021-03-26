<template>
  <div class="field-row">
    <input v-model="categoryRef.name" type="text" class="input" />
    <button @click="add">Add Category</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

import { categoryKey } from "@/store/category/index";
import { ICreateCategory } from "@/@types/category";

export default defineComponent({
  name: "CreateForm",
  components: {},

  setup() {
    // Store情報をInject
    const store = inject(categoryKey);
    if (!store) {
      throw new Error("");
    }

    // カテゴリ作成用データ
    const categoryRef = ref<ICreateCategory>({ name: "" });

    // カテゴリ作成処理
    const add = () => {
      // TODO名が空文字であれば何もしない
      if (categoryRef.value.name === "") {
        return;
      }
      // カテゴリを生成
      store.addCategory(categoryRef.value);
      // カテゴリ情報を初期化
      categoryRef.value = {
        name: "",
      };
    };

    return { add, categoryRef };
  },
});
</script>

<style lang="sass" scoped>
// 入力欄
.input
  width: 100%
</style>

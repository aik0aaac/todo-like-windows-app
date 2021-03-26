import { ICategory, ICreateCategory } from "@/@types/category";
import ManagementIdUtil from "@/utils/managementIdUtil";
import { InjectionKey, reactive, readonly } from "vue";
import { Store } from "./types";

const state = reactive<{ categories: ICategory[] }>({
  categories: [
    {
      id: ManagementIdUtil.generateId(),
      name: "category 1",
    },
  ],
});

const addCategory = (data: ICreateCategory): void => {
  state.categories.push({
    id: ManagementIdUtil.generateId(),
    name: data.name,
  });
};

const removeCategory = (data: ICategory): void => {
  const index = state.categories.findIndex((e) => e.id === data.id);
  state.categories.splice(index, 1);
};

export default {
  state: readonly(state),
  addCategory,
  removeCategory,
};

export const categoryKey: InjectionKey<Store> = Symbol("categoryKey");

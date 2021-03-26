import { ITodo } from "@/@types/todo";
import ManagementIdUtil from "@/utils/managementIdUtil";

export const init = () => {
  const initTodos = (): ITodo[] => {
    // APIなどから取得する想定
    return [
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
    ];
  };

  return {
    initTodos,
  };
};

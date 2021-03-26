import { ITodo } from "@/@types/todo";
import { reactive } from "vue";

export const store = (todos: ITodo[] = []) => {
  const state = reactive({
    todos: todos,
  });

  const addTodoStore = (todo: ITodo) => {
    state.todos.push(todo);
  };

  const removeTodoStore = (todo: ITodo) => {
    const index = state.todos.findIndex((e) => e.id === todo.id);
    state.todos.splice(index, 1);
  };

  return {
    get todos() {
      return state.todos;
    },
    addTodoStore,
    removeTodoStore,
  };
};

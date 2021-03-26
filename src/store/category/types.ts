import { ICategory, ICreateCategory } from "@/@types/category";

export interface Store {
  state: {
    readonly categories: ICategory[];
  };
  addCategory: (data: ICreateCategory) => void;
  removeCategory: (data: ICategory) => void;
}

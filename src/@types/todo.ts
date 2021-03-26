/**
 * TODOアイテム。
 */
export interface ITodo {
  /**
   * ID。
   */
  id: number;
  /**
   * 名称。
   */
  name: string;
  /**
   * 完了したかどうか。
   */
  isDone: boolean;

  /**
   * 子アイテム。
   */
  children: ITodoChildren[];

  /**
   * カテゴリID。
   */
  categoryId: number;
}
/**
 * TODOアイテム(追加用)。
 */
export interface ICreateTodo {
  /**
   * 名称。
   */
  name: string;
  /**
   * カテゴリID。
   */
  categoryId: number;
}

/**
 * TODOアイテムの子アイテム。
 */
export interface ITodoChildren {
  /**
   * ID。
   */
  id: number;
  /**
   * 名称。
   */
  name: string;
  /**
   * 完了したかどうか。
   */
  isDone: boolean;
}

/**
 * カテゴリ。
 */
export interface ICategory {
  /**
   * ID。
   */
  id: number;
  /**
   * 名称。
   */
  name: string;
}

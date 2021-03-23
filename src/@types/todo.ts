/**
 * TODOアイテム。
 */
export interface ITodo {
  /**
   * 名称。
   */
  name: string;
  /**
   * 進行状態。
   */
  state: string;

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
export interface ITodoCreate {
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
   * 名称。
   */
  name: string;
  /**
   * 進行状態。
   */
  state: string;
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

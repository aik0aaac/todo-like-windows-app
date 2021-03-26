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

/**
 * カテゴリ(追加用)。
 */
export interface ICreateCategory {
  /**
   * 名称。
   */
  name: string;
}

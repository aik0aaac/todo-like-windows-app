/**
 * ID管理を行うUtilクラス。
 */
export default class ManagementIdUtil {
  /**
   * IDを生成する。
   * ID=`[現在の日付のTimestamp][0~100の乱数]`
   */
  public static generateId(): number {
    return parseInt(`${Date.now()}${Math.round(Math.random() * 100)}`);
  }
}

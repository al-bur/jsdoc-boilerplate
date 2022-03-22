/**
 * 자판기를 만들어준다.
 * @class
 */
class VendingMachine {
  /**
   * 아이스 아메리카노랑 따뜻한 아메리카노 가지고 있는 총 개수
   */
  constructor() {}

  /**
   * @param {number} money - 자판기에 투입한 금액
   * @return {string} - 구매 결과를 반환한다.
   */
  getItem(money) {}

  /**
   * 투입금액이 1000원 이상이면 아이스 아메리카노, 1000원 미만이면 따뜻한 아메리카노를 반환한다.
   * @param {number} money - 자판기에 투입한 금액
   * @return {string} - 아메리카노 종류를 반환한다.
   */
  defineAmericano(money) {}

  /**
   * 구매결과를 콘솔에 출력한다.
   * @param {string} purchaseResult - 구매 결과
   */
  printResult(purchaseResult) {}

  /**
   * 주어진 아메리카노 종류 개수를 1개 감소시킨다.
   * @param {string} americaoType - 아메리카노 종류
   */
  decreaseAmount(americaoType) {}
}

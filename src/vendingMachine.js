class VendingMachine {
  constructor(hotAmericanoCount, icedAmericanoCount) {
    this.hotAmericanoCount = hotAmericanoCount;
    this.icedAmericanoCount = icedAmericanoCount;
  }

  getItem(money) {
    const productName = money >= 1000 ? '아이스 아메리카노' : '따뜻한 아메리카노';
    const totalAmount = money >= 1000 ? this.icedAmericanoCount : this.hotAmericanoCount;

    productName === '아이스 아메리카노'
      ? (this.icedAmericanoCount -= 1)
      : (this.hotAmericanoCount -= 1);

    return `${productName} (1/${totalAmount}개)를 ${money}원에 구매했습니다.`;
  }
}

const vendingMachine = new VendingMachine(10, 10);

console.log(vendingMachine.getItem(1000));
console.log(vendingMachine.getItem(1000));
console.log(vendingMachine.getItem(1000));
console.log(vendingMachine.getItem(1000));

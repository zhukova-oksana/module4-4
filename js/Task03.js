'use strict';

let discount = 0;

const calculate = (summa, amount, promoCode = '') => {
  let tempSumma = summa;

  if (amount > 10) {
    discount = tempSumma * 0.03;
    tempSumma -= discount;
  }

  if (summa > 30000) {
    discount = (summa - 30000) * 0.15;
    tempSumma -= discount;
  }

  if (promoCode === 'METHED') {
    discount = summa * 0.1;
    tempSumma -= discount;
  }

  if ((promoCode === 'G3H2Z1') && (tempSumma > 2000)) {
    tempSumma -= 500;
  }

  return tempSumma;
}

console.log (calculate(10000, 1, 'G3H2Z1'));

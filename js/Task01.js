'use strict';

const convert = (price) => {
  let interim = price;
  interim = interim * 1.2 * 73;

  return interim;
}

console.log(convert(10));

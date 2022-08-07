'use strict';

const changeStr = (str) => {
  let copyString = str;
  copyString = copyString[0].toUpperCase() + str.slice(1).toLowerCase();
  return copyString;
}

console.log(changeStr('привет Мир'));

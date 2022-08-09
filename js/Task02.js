'use strict';

const changeStr = (str) => {
  let copyString = str.trim().toLowerCase();
  copyString = copyString[0].toUpperCase() + copyString.slice(1);
  return copyString;
}

console.log(changeStr(' привет Мир '));

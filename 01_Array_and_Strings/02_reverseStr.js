/*
Reverse string
*/

'use strict';

function reverseStr(str) {
  let result = '';
  // build a string by iterating backwards
  for (let i = str.length-1; i >= 0; i--) {
    let char = str[i];
    result += char;
  }
  return result;
};

function recursiveReverseStr(str) {
  if (str.length <= 1) {
    return str;
  }
  return recursiveReverseStr(str.slice(1)) + str[0];
}

// uncomment to use recursive solution
// reverseStr = recursiveReverseStr;

module.exports = reverseStr;

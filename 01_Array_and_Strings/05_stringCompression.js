/*
Perform basic string compression
 input: 'aabcccccaaa'
 output: 'a2b1c5a3'

 Extra credit: Do string compression in place

*/

'use strict';

function stringCompression(str) {
  let prevCharCount;
  let result = '';

  // iterate through length of string
  for (let i = 0; i < str.length; i++) {
    let prevChar = str[i];
    prevCharCount = prevCharCount || 1;// track prevCharCount
    let nextChar = str[i+1];

    if (prevChar !== nextChar) {
      result += prevChar + prevCharCount;
      prevCharCount = 0;

    } else if (prevChar === nextChar) {
      prevCharCount++
    }
  }

  return str.length > result.length ? result : str;
}

console.log(stringCompression('aabcccccaaa'))

module.exports = stringCompression;

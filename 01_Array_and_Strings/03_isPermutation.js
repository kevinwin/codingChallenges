/*
Given two strings, write a method to decide if one is a permutation of the other
*/

'use strict';

function isPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = genCharCountMap(str1);
  const map2 = genCharCountMap(str2);

  for (let char in map1) {
    if (map1[char] !== map2[char]) {
      return false;
    }
  }
  return true;

}

function genCharCountMap(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  return charCount;
};

module.exports = isPermutation;

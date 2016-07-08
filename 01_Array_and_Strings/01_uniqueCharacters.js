/*
Implement an algorithem to determine if a string has all unique characters.
What if you cannot use additional data structure?
*/

'use strict';

function uniqueCharactersWithDataStructure(str) {
  const unique = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (unique[char]) {
      return false;
    }
    unique[char] = char;
  }
  return true;
}

function uniqueCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char, i+1) !== -1) {
      return false;
    }
  }
  return true;
}

// uncomment to use data structure solution
// uniqueCharacters = uniqueCharactersWithDataStructure;

module.exports = uniqueCharacters;

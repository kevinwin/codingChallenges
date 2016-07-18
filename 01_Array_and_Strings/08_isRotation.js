/*
Assume you have a mthod is Substring wich checks if one word is a substring of another. Givent two strings, s1 and s2, whrite code to check if s2 is a otation of s1 using only once call to isSubstring( e.g. "waterbottle" is a rotation of "erbottlewat")
*/

function isRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  if (!isSubstring(s1+s1, s2)) {
    return false;
  }
  return true;
};

function isSubstring(s1, s2) {
  for (let i = 0; i < s2.length; i++) {
    if ( s1.slice(i, i + s2.length) === s2) return true;
  }
  return false;
};

module.exports = isRotation;

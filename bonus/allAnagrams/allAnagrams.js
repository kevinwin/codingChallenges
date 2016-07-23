/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var result = [];
  var unique = {};

  function permute(build, remaining) {
    if (remaining.length === 0) {
      if (!unique[build]) {
        unique[build] = true;
        result.push(build);
      }
      return;
    }

    for (var i = 0; i < remaining.length; i++) {
      var char = remaining[i];
      var others = remaining.slice(0, i) + remaining.slice(i+1);
      permute(build+char, others);
    }
  } 

  permute('', string);
  return result; 
};

module.exports = allAnagrams;

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const countS = {};
  const countT = {};

  for (const char of s) {
    countS[char] = (countS[char] || 0) + 1;
  }

  for (const char of t) {
    countT[char] = (countT[char] || 0) + 1;
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) return false;
  }

  return true;
};
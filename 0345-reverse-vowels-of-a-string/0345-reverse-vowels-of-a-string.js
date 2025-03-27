/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let ans = "";
  let vowelsId = [];
  const vowels='AEIOUaeiou'

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) vowelsId.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) ans += s[vowelsId.pop() || 0];
    else ans += s[i]; 
  }

  return ans; 
};
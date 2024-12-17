/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let res = 0 
    for(let i=0; i<s.length; i++){
        let char1 = s[i]
        let char2 = t.indexOf(char1)
        res += Math.abs(i - char2)
    }
    return res
};
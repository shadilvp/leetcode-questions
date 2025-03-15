/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let ans = s.split('').reduce((a,b,i)=>(a[indices[i]] = b, a), []).join('')
    return ans
};
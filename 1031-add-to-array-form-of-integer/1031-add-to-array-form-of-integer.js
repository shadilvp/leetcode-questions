/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let a = BigInt(num.join(''))
    let add = a + BigInt(k) 
    let res =String(add).split('').map(Number);
    return res
};
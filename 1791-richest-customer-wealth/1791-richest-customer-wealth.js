/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr1 = accounts.map((arr => [arr.reduce((a,b)=>a + b ,0)])).flat()
    let res = Math.max(...arr1)
    return res

};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 0) return -1 * reverse(-x)
    let ans = (x+'').split('').reverse().join('')
    return(ans > 2**31 - 1) ? 0 : parseInt(ans) ;
};
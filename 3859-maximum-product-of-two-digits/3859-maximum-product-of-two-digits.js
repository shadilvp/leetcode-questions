/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
return n.toString().split('').map(Number).sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b);

};
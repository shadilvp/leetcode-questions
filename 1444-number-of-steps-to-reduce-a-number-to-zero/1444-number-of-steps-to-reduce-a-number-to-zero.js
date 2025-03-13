/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    return num === 0 ? 0 : 1 + numberOfSteps(num % 2 === 0 ? num / 2 : num - 1);
};
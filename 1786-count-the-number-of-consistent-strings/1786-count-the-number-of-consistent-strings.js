/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res = words.filter(word => word.split('').every(char => allowed.includes(char)))
    console.log(res.length)
    return res.length;
};
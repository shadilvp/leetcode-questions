/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let result = s.split(' ')
    .map(char => char.split('').reverse().join(''))
    .join(' ')

    console.log(result)
    return result
};
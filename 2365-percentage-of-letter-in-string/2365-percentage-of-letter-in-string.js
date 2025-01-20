/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let strLength = s.length;
    let toArr = s.split('');
    let letterLength = toArr.filter((s)=>s == letter).length;
    let result =  letterLength/strLength * 100;
    return Math.floor(result)

};
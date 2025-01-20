/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let strLength = s.length;
    let toArr = s.split('');
    let letterLength = toArr.filter((s)=>s == letter).length;
    return Math.floor(letterLength/strLength * 100);

};
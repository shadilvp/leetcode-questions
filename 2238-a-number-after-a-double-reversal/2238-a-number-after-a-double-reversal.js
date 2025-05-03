/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let reversed1 = Math.abs(num.toString().split('').reverse().join(''))
    let reversed2 = Math.abs(reversed1.toString().split('').reverse().join(''))
    console.log(reversed2)
    if(reversed2 === num){
        return true
    }
    return false
};
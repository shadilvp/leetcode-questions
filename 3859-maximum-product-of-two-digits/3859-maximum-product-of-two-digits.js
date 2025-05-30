/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let numbers =n.toString().split('').map(Number).sort((a,b)=>b-a)
    let num1 = numbers[0]
    let num2 = numbers[1]
    let result = num1 * num2
    console.log(num1, num2)
    return result
};
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // if(n == 0 ){
    //     return 0
    // }
    // let result = 1;
    // for (let i = 1; i <= n; i++) {
    //     result *= i;
    // }
    // let findZero = String(result)
    // let countZero = 0
    // for(let i = 0 ; i < findZero.length ; i++){
    //     if(findZero[i] === '0'){
    //         countZero ++
    //     }
    // }
    // return countZero;
        let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        numZeroes += Math.floor(n / i);
    }
    return numZeroes;
};
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    for(let i = 1 ; i <= n+3 ; i ++){
        let a =  i * n ;
        if(a % 2 == 0){
            return a
        }
    }
};
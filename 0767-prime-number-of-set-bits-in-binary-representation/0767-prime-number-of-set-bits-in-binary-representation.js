/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let isPrime = (n) => {
        if(n <= 1) return false
        for(let i = 2 ; i <= Math.sqrt(n); i++){
            if(n % i === 0) return false
        }
        return true
    }
    let result = []
    for(let i = left ; i <= right ; i ++){
        result.push(i)
    }
    let binary = result.map(num => num
                .toString(2)
                .split('')
                .map(Number)
                .reduce((a,b)=> a+ b ,0)
    );
    let filtered = result.filter((num, index)=> isPrime(binary[index]))
    console.log(filtered.length)
    return filtered.length
};
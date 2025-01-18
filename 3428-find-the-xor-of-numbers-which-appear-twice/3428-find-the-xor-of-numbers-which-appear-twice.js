/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let unique = new Set();
    let duplicate = []
    for(let num of nums){
        if(unique.has(num)){
            duplicate.push(num)
        }
        unique.add(num)
    }
    if(duplicate.length == 0) return 0
    if(duplicate.length === 1) return duplicate[0]
    return duplicate.reduce((a,b)=>a ^ b,0)
};
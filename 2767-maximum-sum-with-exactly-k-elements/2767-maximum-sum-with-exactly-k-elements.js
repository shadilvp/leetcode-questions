/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let n = nums.sort((a,b)=>b-a)[0]
    let total = 0
    while(k>0){
        total += n
        n += 1
        k -= 1
    }
    return total
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    if(nums === null || nums.length<=1) return 0
    let minimum = nums[0];
    let sum = 0
    for( let i = 0 ; i<nums.length ; i++ ){
        sum += nums[i]
        minimum = Math.min(minimum,nums[i]) 
    }

    return sum-minimum * nums.length
};
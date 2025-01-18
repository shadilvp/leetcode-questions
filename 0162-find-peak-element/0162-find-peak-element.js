/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let biggestNum = Math.max(...nums)
    let index = nums.indexOf(biggestNum)
    return index
};
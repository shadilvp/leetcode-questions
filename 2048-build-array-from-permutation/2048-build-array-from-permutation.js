/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const distinctNums = [...new Set(nums)];
    return nums.map(a=> nums[a])
};
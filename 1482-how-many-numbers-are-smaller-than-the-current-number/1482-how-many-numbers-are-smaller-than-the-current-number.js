/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = nums.map(n => nums.filter( x => x < n).length)
    return result
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let length = nums.map(items=> String(items).length).filter(items=> items % 2 == 0) 
    return parseInt(length.length)
};
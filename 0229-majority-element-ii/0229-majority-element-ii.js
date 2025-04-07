/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    const counts = {};
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    const result = [];
    for (const num in counts) {
        if (counts[num] > nums.length / 3) {
            result.push(Number(num));
        }
    }
    return result;
    
};
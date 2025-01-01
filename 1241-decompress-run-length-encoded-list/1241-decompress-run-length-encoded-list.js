/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];

    for (let i = 0; i < nums.length; i += 2) {
        let count = nums[i];
        let val = nums[i+1]
        for(let j = 0; j < count ; j++){
            res.push(val)
        }
    }

    return res
};
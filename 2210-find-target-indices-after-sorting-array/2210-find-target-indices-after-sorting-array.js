/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let indices = nums
        .sort((a, b) => a - b)
        .reduce((acc, num, index) =>{  
            if (num === target) acc.push(index)
            return acc}, 
        [])
    return indices

};
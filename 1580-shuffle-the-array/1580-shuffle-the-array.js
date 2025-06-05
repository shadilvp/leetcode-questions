/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let half = nums.length / 2
    let splitted1 = nums.slice(0, half)
    let splitted2 = nums.slice(half)

    let result = [];

    for (let i = 0; i < half; i++) {
        result.push(splitted1[i]);
        result.push(splitted2[i]);
    }

    return result
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let unique = new Set();
    let duplicate = new Set();
    for(let num of nums){
        if(unique.has(num)){
            duplicate.add(num)
        }
        unique.add(num)
    }
    const result = [...unique].filter((num)=> !duplicate.has(num))
    return result;
};
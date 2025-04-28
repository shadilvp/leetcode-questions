/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let countMap = new Map()
    let result = [] ;
    for(let num of nums){
        const count = countMap.get(num) || 0
        if(count < 2){
            result.push(num);
            countMap.set(num, count+1)
        }
    }
    console.log(result)
    

    nums.length = 0

    for(let num of result){
        nums.push(num)
    }

    return nums.length
};
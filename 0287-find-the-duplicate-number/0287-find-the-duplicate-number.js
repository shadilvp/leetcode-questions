/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const count = {} ;

    for(let i = 0 ; i < nums.length ; i ++){
            const numbers = nums[i]
        if(count[numbers]){
           return numbers ;
        }else{
             count[nums[i]] = 1 
        }
    }
    return -1
};
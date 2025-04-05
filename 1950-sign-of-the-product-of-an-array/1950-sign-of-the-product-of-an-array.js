/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let numberCount = 0 ;
    for(let i = 0 ; i < nums.length ; i ++ ){
        if(nums[i] === 0 ){
            return 0
        }
        if(nums[i] < 0){
            numberCount ++
        }
    }
    if(numberCount % 2 == 0){
        return 1
    }else{
        return -1
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityNumber = null;
    let count = 0
    for(let num of nums){
        if(count == 0){
            majorityNumber = num;
            count = 1
        }else if( num === majorityNumber ){
            count ++
        }else{
            count --
        }
    }
    return majorityNumber;
};
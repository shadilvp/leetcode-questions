/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicate = new Set();
    let checking = 0
    for(num of nums){
        if(duplicate.has(num)){
            checking ++
        }
        duplicate.add(num)
    }
    return checking== 0 ?false :true
};
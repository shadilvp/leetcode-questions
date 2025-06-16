/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let maped = new Map();
    for(let num of nums){
        maped.set(num, (maped.get(num) || 0) + 1)
    }

    let maxCount = 0;
    let mostCommon = null;
    for(let [num, count] of maped.entries()){
        if(count > maxCount){
            maxCount = count
            mostCommon = num
        }
    }
    console.log(mostCommon)
    return mostCommon
};
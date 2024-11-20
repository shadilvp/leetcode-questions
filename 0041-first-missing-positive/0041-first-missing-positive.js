/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    let hell = nums.filter((nums)=> nums > 0).sort((a,b)=> a - b)
    let obj = new Set(hell)
    let alt = [...obj]
    if(alt[0] !== 1){
        return 1
    }
    for(let i = 0 ; i < alt.length ; i ++){
        if(alt[i]+1 !== alt[i+1])
        return alt[i] + 1
    }
    console.log(alt)
};
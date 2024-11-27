/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function(nums, numsDivide) {
    let sort = nums.sort((a,b)=> a - b)
    let set1 = new Set(sort) 
    let set2 = new Set(numsDivide)
    let newArr1 = [...set1]
    let newArr2 = [...set2]

    for(let i = 0 ; i < newArr1.length ; i ++){
        
        let result = true

        for(let j = 0; j < newArr2.length ; j ++){
            if(newArr2[j] % newArr1[i] !== 0 ){
                result = false
                break ; 
            }
        }

        if(result){
            for(let k = 0 ; k < nums.length ; k ++){
                if(newArr1[i] === nums[k]){
                    return k
                }
            }
        }
    }
    return -1
};
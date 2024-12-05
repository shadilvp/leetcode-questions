/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    
    let a = [...new Set(nums1)]
    let b = [...new Set(nums2)]
    let c = [...new Set(nums3)]
    const arr = a.concat(b, c);
    // console.log(arr)
    let unique = new Set()
    let res = []
    for(let num of arr){
        if(unique.has(num)){
            res.push(num)
        }else{
            unique.add(num)
        }
    }
    let final = [...new Set(res)]
    return final
};
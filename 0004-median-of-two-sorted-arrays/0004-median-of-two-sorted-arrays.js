/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a,b)=>a-b)
    if(arr.length % 2 === 0){
        let cntr1 = Math.floor(arr.length/2)-1
        let cntr2 = Math.floor(arr.length/2)
        return (arr[cntr1] + arr[cntr2])/2
    }
    else{
        return parseFloat(arr[Math.floor(arr.length/2)])
    } 
}; 
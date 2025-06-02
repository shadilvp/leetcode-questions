/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freq = nums.reduce((a,b)=>{
        a[b] = (a[b] || 0) + 1
        return a
    }, {})
    return nums.sort((a,b)=> {
        if(freq[a] === freq[b]){
            return b - a
        }
        return freq[a] - freq[b]
    })
};
<<<<<<< HEAD
var moveZeroes = function(nums) {
    const nonZeroArray = nums.filter(num => num !== 0);
    const zeroArray = nums.filter(num => num === 0);
    const result = nonZeroArray.concat(zeroArray);
    nums.length = 0
    nums.push(...result)
   
=======
var moveZeroes = function(nums) {
    const nonZeroArray = nums.filter(num => num !== 0);
    const zeroArray = nums.filter(num => num === 0);
    const result = nonZeroArray.concat(zeroArray);
    nums.length = 0
    nums.push(...result)
   
>>>>>>> e066d12ad74bc0e73f095deacc9b518f48ddfff9
};
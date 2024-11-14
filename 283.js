var moveZeroes = function(nums) {
    const nonZeroArray = nums.filter(num => num !== 0);
    const zeroArray = nums.filter(num => num === 0);
    const result = nonZeroArray.concat(zeroArray);
    nums.length = 0
    nums.push(...result)
   
};
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let seen = new Set();
  let res;
  for(let i=0; i<numbers.length; i++){
    const compliment = target-numbers[i]
    if(seen.has(compliment)){
        let temp = numbers.indexOf(compliment)
         res = [temp+1,i+1]
    }
    seen.add(numbers[i])
  }  
   
  return res
};
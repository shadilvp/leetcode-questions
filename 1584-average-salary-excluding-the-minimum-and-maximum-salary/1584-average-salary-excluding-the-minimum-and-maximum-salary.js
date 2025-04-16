/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Math.min(...salary)
    let max = Math.max(...salary)
    let total = salary.reduce((a,b)=> a + b ,0)
    let excluded = total - min - max
    let avg = excluded / (salary.length-2)
    console.log(avg)
    return avg
};
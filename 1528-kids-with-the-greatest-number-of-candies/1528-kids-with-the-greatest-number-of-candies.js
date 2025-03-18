/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = candies.map(c => c + extraCandies >= Math.max(...candies) );
    return result;
};
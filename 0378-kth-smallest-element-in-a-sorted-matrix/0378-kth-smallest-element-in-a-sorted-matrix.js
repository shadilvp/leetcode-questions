/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let flattenArr = matrix.flat().sort((a,b)=> a-b)

    console.log(flattenArr)
    return flattenArr[k-1]
};
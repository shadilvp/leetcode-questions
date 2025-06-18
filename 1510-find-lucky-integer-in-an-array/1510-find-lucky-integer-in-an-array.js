/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let lucky = -1
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count === arr[i]) {
            lucky = Math.max(lucky, arr[i])
        }
    }
    return lucky
};
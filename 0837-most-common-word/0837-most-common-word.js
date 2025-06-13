/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let count = new Map()
    let res = paragraph.toLowerCase()
        .replace(/[^\w\s]|_/g, " ") 
        .replace(/\s+/g, " ")
        .trim()
        .split(' ')
        .filter(word => !banned.includes(word));
    for (let word of res) {
        count.set(word,(count.get(word) || 0)+ 1)
    }

    let maxCount = 0;
    let mostCommon = "";

    for (let [word, freq] of count.entries()) {
        if (freq > maxCount) {
            maxCount = freq;
            mostCommon = word;
        }
    }
    // console.log(count)
    return mostCommon;
};
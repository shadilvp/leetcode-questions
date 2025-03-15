/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result = Math.max(...sentences.map(s => s.split(' ').length))
    return result
};
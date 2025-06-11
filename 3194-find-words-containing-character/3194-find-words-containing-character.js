/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let indices = words.reduce((acc, word, index) => {
        if (word.includes(x)) acc.push(index);
        return acc;
    }, []);
    return indices
};
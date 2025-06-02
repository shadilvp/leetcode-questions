/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let arranged = s.split('').reduce((acc, char)=>{
        acc[char] = (acc[char] || 0) + 1
        return acc ; 
    }, {})

    const sorted = Object.entries(arranged)
    .sort((a,b)=>b[1] - a[1])
    .map(([char, count]) => char.repeat(count)).join('')
    console.log(sorted)
    return sorted
};
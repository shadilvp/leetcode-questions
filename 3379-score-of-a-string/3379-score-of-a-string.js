/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let result = []
    let asci = s.split('').map(char => char.charCodeAt(0))
    for(let i = 0 ; i < asci.length-1 ; i++ ){
        result.push(Math.abs(asci[i] - asci[i+1]))
    }
    return result.reduce((a,b)=>a+b,0)
};
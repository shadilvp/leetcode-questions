/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let result1 = [];
    let result2 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            if (result1.length > 0) {
                result1.pop()
            }
        } else {
            result1.push(s[i])
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            if (result2.length > 0) {
                result2.pop()
            }
        } else {
            result2.push(t[i])
        }
    }
    if(result1.join('') === result2.join('')){
        return true
    }else{
        return false
    }
};
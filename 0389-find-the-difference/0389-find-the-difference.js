/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let a = s.split("").sort().join("")
    let b = t.split("").sort().join("")
    console.log(a)
    console.log(b)
    for(let i=0;i<b.length;i++){
        if(a[i] != b[i]){
            return b[i]
        }
    }
    return ""
};
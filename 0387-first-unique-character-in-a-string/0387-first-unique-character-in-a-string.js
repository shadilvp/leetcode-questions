/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let unique = new Set();
    let duplicates = new Set();
    for(let char of s){
        if(unique.has(char)){
            duplicates.add(char)
        }else{
            unique.add(char)
        }
    }
    for(let i=0; i<s.length; i++){
        if(!duplicates.has(s[i])){
            return i
        }
    }
    return -1

};
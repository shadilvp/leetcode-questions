/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.trim().split(' ');
    if(words.length > 0 ){
        return words[words.length-1].length ;
    }else{
        return 0 ;
    }
};
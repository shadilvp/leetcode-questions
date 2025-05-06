/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanerString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    console.log(cleanerString)
    let reversedString = cleanerString.split('').reverse().join('')
    console.log(reversedString)
    if(cleanerString === reversedString){
        return true
    }else{
        return false
    }
};
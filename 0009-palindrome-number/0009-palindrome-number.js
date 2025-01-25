/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let tostr = String(x).split('');
    let rev = tostr.reverse();
    let final = rev.join('');
    if(String(x) === final){
        return true ;
    }else{
        return false ;
    };
};

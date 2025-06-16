/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    // for(let i = 0 ; i < s.length ; i++){
    //     if(s[i] == s[i+1]){
    //        s = s.slice(0,i) + s.slice(i+2)
    //        i = -1 
    //     }
    // }
    // console.log(s)
    // return s;

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
};
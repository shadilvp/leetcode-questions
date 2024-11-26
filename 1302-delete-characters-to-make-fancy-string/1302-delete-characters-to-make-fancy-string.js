/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let arr = s.split('')
    let empty = []
    for(let i = 0 ; i <arr.length ; i ++){
        if(arr[i] !== arr[i+1] || arr[i] !== arr[i+2]){
            empty.push(arr[i])
        }
    }
    let str = empty.join('')
    return str
};
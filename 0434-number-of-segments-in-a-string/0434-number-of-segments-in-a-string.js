/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let splittedArr = s.trim().replace(/\s+/g, ' ').split('')
    let result = 1
    if(s.trim() == 0){
        return 0
    }
    console.log(splittedArr)
    for(let i = 0 ; i < splittedArr.length ; i ++){
        if(splittedArr[i] == ' '){
            result ++
        }
    }

    console.log(result)

    return result
};
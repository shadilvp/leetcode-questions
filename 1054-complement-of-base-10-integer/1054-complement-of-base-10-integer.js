/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let compliment = []
    let binary = n.toString(2)
    for(let i = 0 ; i < binary.length ; i ++){
        if(binary[i] == '1'){
            compliment.push(0)
        }else{
            compliment.push(1)
        }
    }
    let res = parseInt(compliment.join(''), 2)
    console.log(res)
    return res
};
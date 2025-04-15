/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let ops = operations.map(item => {
        return !isNaN(item) ? Number(item) : item;
    });
    let result = []
    for(let i = 0 ; i < ops.length ; i++ ){
        if(ops[i] == "D"){
            result.push(result[result.length-1] * 2)
        }else if(ops[i] == "+"){
            result.push(result[result.length-1] + result[result.length-2])
        }else if(ops[i] == "C"){
            result.pop()
        }else{
            result.push(ops[i])
        }
    }
    console.log(result)
    let total = result.reduce((a,b)=> a+b ,0)
    return total
};
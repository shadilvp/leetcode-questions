/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    let expandedArr = []
    //for expanding the array lo to hi
    for(let i= lo ; i <= hi ; i++ ){
        expandedArr.push(i)
    }
    //we don't have an exponent so we are making the power function 
    const powFun = (num) => { 
        let steps = 0;
        for(let current = num ; current != 1; steps ++){
            current = current % 2 == 0 ? current / 2 : 3*current + 1 
        }
        return steps
    }
    //making the powered array using the powerfunction
    let poweredArr = expandedArr.map(powFun)
    //sorting the original array based on the powered array values
    const sortedOrgArr = expandedArr
        .map((num, index) => ({ num, power: poweredArr[index] }))
        .sort((a,b)=>a.power -b.power)  
        .map(obj=>obj.num)
    //returning the k from the sorted original array
    return sortedOrgArr[k-1]
};
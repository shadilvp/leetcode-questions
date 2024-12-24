/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    let expandedArr = []
    for(let i= lo ; i <= hi ; i++ ){
        expandedArr.push(i)
    }
    const powFun = (num) => {
        let steps = 0;
        for(let current = num ; current != 1; steps ++){
            current = current % 2 == 0 ? current / 2 : 3*current + 1 
        }
        return steps
    }
    let poweredArr = expandedArr.map(powFun)
    const sortedOrgArr = expandedArr
        .map((num, index) => ({ num, power: poweredArr[index] }))
        .sort((a,b)=>a.power -b.power)  
        .map(obj=>obj.num)
    return sortedOrgArr[k-1]
};
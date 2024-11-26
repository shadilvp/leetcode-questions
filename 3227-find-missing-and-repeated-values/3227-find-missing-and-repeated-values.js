/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr = grid.flat().sort((a,b)=> a-b)
    let unique = new Set()
    let ans = []
    for(let num of arr){
        if(unique.has(num)){
            ans.push(num)
        }else{
            unique.add(num)
        }
    }
    let a = [...unique]
    if(a[0] !== 1){
        ans.push(1)
    }else{
        for(let i = 0 ; i < a.length ; i ++){
            if(a[i]+1 !== a[i+1]){
                ans.push(a[i]+1)
                break ;
            }
        }
    }
    return ans
};
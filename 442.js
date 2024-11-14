var findDuplicates = function(nums) {
    const unique = new Set()
    let a = []
    for(let num of nums){
        if(unique.has(num)){
            a.push(num)
        }else{
            unique.add(num)
        }
    }
    return a

    
};
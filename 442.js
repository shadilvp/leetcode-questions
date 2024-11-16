<<<<<<< HEAD
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

    
=======
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

    
>>>>>>> e066d12ad74bc0e73f095deacc9b518f48ddfff9
};
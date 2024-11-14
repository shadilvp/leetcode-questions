var thirdMax = function(nums) {
    let sorted = nums.sort((a,b)=> b-a)
    let dis = [...new Set(sorted)]
    if(dis.length >= 3){
        return dis[2]
    }else{
        return dis[0]
    }

     
};
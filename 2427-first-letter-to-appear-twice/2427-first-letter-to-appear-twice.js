/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let numbers = [...s]
    let unique = new Set()
    for(let num of numbers){
        if(unique.has(num)){
            return num
        }else{
            unique.add(num)
        }
    }
    
};
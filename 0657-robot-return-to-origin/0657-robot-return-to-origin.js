/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let positionX = 0
    let positionY = 0

    for(let i = 0 ; i < moves.length ; i ++){
        if(moves[i] == "R"){
            positionX++
        }else if(moves[i] == "L"){
            positionX--
        }else if(moves[i] == "U"){
            positionY++
        }else{
            positionY--
        }
    }

    if(positionX === 0 && positionY === 0){
        return true
    }else{
        return false
    }
};
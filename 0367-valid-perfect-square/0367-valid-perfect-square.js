/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(Math.sqrt(num) % 2 == 1 || Math.sqrt(num) % 2 == 0){
        return true
    }else{
        return false
    }
};
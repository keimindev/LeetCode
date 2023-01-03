/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if( x == 0) return 0
    else return Math.floor(x / Math.sqrt(x))
};
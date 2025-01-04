/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    
    const reverseNumber = x.toString().split('').reverse().join('');
    return x == reverseNumber ? true : false
};
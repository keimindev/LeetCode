/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result= n.toString(2)
    result = result.padStart(32, '0');
    let reversedString = result.split('').reverse().join('');
    let ans =parseInt(reversedString,2)
    return ans  
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = BigInt(digits.join(''));
    const addOne = num + 1n;
    return addOne.toString().split('')
    
};
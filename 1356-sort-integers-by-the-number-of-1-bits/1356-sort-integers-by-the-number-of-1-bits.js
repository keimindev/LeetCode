/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
     const numOfBits = function(num) {
        // Get number of bits in number
        // Convert number to binary, reduce to 1s
        const bits = num.toString(2).match(/1/g);
        return bits ? bits.length : 0;
    }
    
    // Sort by number of bits, with secondary sort of val if bits are equal
    return arr.sort((a, b) => numOfBits(a) - numOfBits(b) || a - b);
};
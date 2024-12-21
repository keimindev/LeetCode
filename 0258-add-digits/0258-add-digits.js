/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = num.toString();
    
    while (str.length > 1) {
        str = str.split('')
            .map(Number)
            .reduce((a, b) => a + b)
            .toString();
    }
    return Number(str)
};
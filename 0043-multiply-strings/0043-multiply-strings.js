/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    //BigInt ? 
    //원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
    const multiplyNum = BigInt(num1) * BigInt(num2)
    return String(multiplyNum)
};
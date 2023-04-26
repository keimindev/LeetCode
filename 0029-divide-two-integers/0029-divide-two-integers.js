/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
 let result = parseInt(dividend / divisor);

    //나눈 값이 Integer 범위를 벗어나면 그 마지막 범위를 찾아서 리턴
 if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
 if (result < Math.pow(2, 31) * -1) return Math.pow(2, 31) * -1;

    return result;
};
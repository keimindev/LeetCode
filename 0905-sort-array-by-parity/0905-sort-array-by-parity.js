/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // 짝수만 거르기
    let even = nums.filter(a => a % 2 === 0);
    // 홀수만 거르기 
    let odd = nums.filter(a => a % 2 === 1);
    
 
    return [...even,...odd]
};
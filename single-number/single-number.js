/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //XOR 연산 사용
    //숫자를 2진수로 변환해 각 숫자가 같으면 0, 다르면 1로 나타내어지는 연산자이다.
  return nums.reduce((sum, current) => (sum ^= current));
};
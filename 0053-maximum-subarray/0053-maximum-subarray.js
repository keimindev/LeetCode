/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let prev = 0;
  let max = -Infinity;   // 무한대를 나타내는 숫자 값

  for (let i = 0; i < nums.length; i++) {
    // 이전꺼랑 비교해서 현재 숫자
    prev = Math.max(prev + nums[i], nums[i]);
      
    max = Math.max(max, prev);
  }
  return max;
};
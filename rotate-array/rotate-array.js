/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   if (nums.length < k) k %= nums.length;
    // nums 0에서 시작해서 전체길이에서 뒤집을 길이 빼기~ 그걸 새로운 배열로 만들기 
    // 배열길이가 5라고 하고 k가 2면 0,3만큼 제거해주기
    // 그러면 nums에 남은요소 뒤로 다시 턴 돌면서 푸쉬해주기
    const spliceArray = nums.splice(0, nums.length-k)
    spliceArray.forEach(el => nums.push(el))
   
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 무조건 퐁당퐁당으로 가면 되니깐
    // 홀수 짝수 인덱스를 다 더하면? 그리고 비교해서 최대수를 구하면?
    // 퐁당퐁당말고도 두 집을 지나서 털 수도 - 
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]

    // 처음에 첫번 째집을 털었을 때, 혹은 두번째 집을 털었을 때
    let ar = [nums[0], Math.max(nums[0], nums[1])];
    
    for(let i=2; i < nums.length; i++){
        ar[i] = Math.max(ar[i-2] + nums[i], ar[i-1]);
    }
     return ar[nums.length - 1];
    
   
};
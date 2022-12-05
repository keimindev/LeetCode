/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //sort nums
    nums.sort((a,b) => a-b)
    //반으로 나눠서 그 인덱스 수를 찾으면... 
    return nums[Math.floor(nums.length / 2)];
};
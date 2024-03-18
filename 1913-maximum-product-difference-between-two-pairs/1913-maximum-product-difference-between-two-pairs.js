/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // firstly sorting nums
    nums = nums.sort((a,b) => a-b)
    
    let max = nums[nums.length -1] * nums[nums.length -2]
    let min = nums[0] * nums[1]
    return max - min
    
};
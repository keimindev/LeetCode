/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        nums[i] = nums[i]*nums[i];
    }
    let tem = nums.sort((a,b) => a -b)
    return tem;
};
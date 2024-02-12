/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // max 뽑고 
    // max 인덱스빼고 다시 뽑고 ?
    
    const arr = nums.sort((a,b) => b-a)
   
    return (nums[0]-1) * (nums[1] - 1)
    
};
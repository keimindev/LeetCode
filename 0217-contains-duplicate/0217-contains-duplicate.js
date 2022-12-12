/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //배열을 정리해서 
    nums = nums.sort();
    for (let i=0; i<nums.length; i++){
       if(nums[i] == nums[i+1]){
           return true
       }
    }
     return false
};
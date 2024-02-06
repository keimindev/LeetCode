/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
   let result = [];
   nums.sort((a, b) => a - b);

    function backtrack(tempList, remaining, index) {
        for (let i = index; i < nums.length && nums[i] <= remaining; i++) {
            if (nums[i] === remaining) {
                result.push([...tempList, nums[i]]);
            } else {
                backtrack([...tempList, nums[i]], remaining - nums[i], i);
            }
        }
    }

    backtrack([], target, 0);
    return result;  
};
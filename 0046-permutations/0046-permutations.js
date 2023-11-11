/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {

  let results = [];
  
  const recursive = (result) => {

    if (result.length === nums.length) {
      results.push(result.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!result.includes(nums[i])) {
        result.push(nums[i]);
        recursive(result);
        result.pop();
      }
    }
    
  }

  recursive([]);
  return results;
  
};
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let summary = [];
    for(let i = 0, j = 0; j < nums.length; j++) {
        if(j + 1 < nums.length && nums[j+1] === nums[j] + 1) continue;
        if(i === j) {
            summary.push(nums[i] + "");
        } else{
            summary.push(nums[i] + '->' + nums[j]);
        }
        i = j + 1;
    }
    return summary;
};
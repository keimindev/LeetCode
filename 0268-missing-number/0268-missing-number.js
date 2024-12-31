/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    let missingNumber = len*(len+1)/2;
    for (let i of nums){
        missingNumber -= i;
    }
    return missingNumber;
};
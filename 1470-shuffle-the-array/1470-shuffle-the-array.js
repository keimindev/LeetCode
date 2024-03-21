/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr2 = nums.slice(n, nums.length)
    const arr1 = nums.slice(0,n)
    const result = [];
    for(let i=0; i<arr1.length; i++){
        result.push(arr1[i])
        result.push(arr2[i])
    }
    
    return result;
};
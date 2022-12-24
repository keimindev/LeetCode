/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //특정 배열이 하나씩 사라지기때문에 인덱스값도 하나씩 줄어든다
    for(i = nums.length; i >= 0; i--){
        if(nums[i] == 0){
            nums.splice(i,1)
            nums.push(0)
        }
    }
    console.log(nums)
    return nums
};
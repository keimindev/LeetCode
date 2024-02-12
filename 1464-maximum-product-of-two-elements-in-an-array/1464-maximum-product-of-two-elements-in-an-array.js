/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // max 뽑고 
    // max 인덱스빼고 다시 뽑고 ?
    // 라고 생각했지만 내림차순으로 정렬하면 최고점 수 두개만 뽑아서 만들면 된다고 생각함. 
    
    const arr = nums.sort((a,b) => b-a)
   
    return (nums[0]-1) * (nums[1] - 1)
    
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let answer = [];
    nums.sort((a,b)=>a-b);
   
    for(let i=0 ; i<nums.length ; i++){
        if(target == nums[i]){
          answer.push(i)  
        }
    }
    return answer;
};
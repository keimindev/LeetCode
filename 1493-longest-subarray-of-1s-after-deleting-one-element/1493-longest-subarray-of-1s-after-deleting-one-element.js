/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    // 0을 기준점으로 해서 앞쪽에 있는 1들의 수를 다 더하고 
    // 0을 기준점으로 앞 뒤로 모인 1 수를 더해서 그중에서 제일 큰 수를 구한다.
    
    if (!nums.includes(1)) return 0;
    if (!nums.includes(0)) return nums.length - 1;
    
    let sum = 0;
    
    const maxArr = []
    const result = []
    
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
         sum++
        }else{
         maxArr.push(sum)
         sum = 0
        }
    }
    
    maxArr.push(sum)
    
    for (let i = 0; i < maxArr.length; i++) {
       result.push(maxArr[i] + (maxArr[i + 1] || 0));
    }
    
    return Math.max(...result)
        
};
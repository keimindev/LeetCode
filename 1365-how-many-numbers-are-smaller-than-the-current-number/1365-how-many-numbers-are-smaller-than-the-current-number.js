/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // 빈 배열 안에 현재 수랑 다른 수를 비교해서 작으면 ++ ? 
    
    let results = [];
    for(let i=0; i<nums.length; i++){
         let count = 0
        for(let j=0; j<nums.length; j++){
            if(nums[i] > nums[j]){
                count ++;
            }
        }
        
        results.push(count)
    }
    
    return results
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
// O(1) 
// 입력값(N)이 증가해도 실행시간은 동일한 알고리즘. index로 접근하여 바로 처리할 수 있는 연산 과정의 시간 복잡도     
    
   if(nums.length <= 2) {
        return nums.length;
    }
  
    let k = 2;
    for(let i = 2; i < nums.length; i++){
        if(nums[i] != nums[k - 2] || nums[i] != nums[k - 1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
    
};
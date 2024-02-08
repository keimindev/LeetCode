/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    // 주어진 파라미터 길이순번까지 돌아서 그 안에 없는 숫자만 뽑아내기  -> 시간 초과~
    
    let result = [];
    
//     const sortArr = nums.sort((a,b) => a-b)

//     for (let i = 1; i <= sortArr.length; i++) {
//         if (!sortArr.includes(i)) result.push(i)
//     }

//     return result;
    
    
    

    for(let i=0; i < nums.length; i++){
      index = Math.abs(nums[i]) - 1
      nums[index] = -Math.abs(nums[index])
    }

    for(let i=0; i < nums.length; i++){
      if (nums[i] > 0){
        result.push(i+1)
      }
    }
  
    return result
};


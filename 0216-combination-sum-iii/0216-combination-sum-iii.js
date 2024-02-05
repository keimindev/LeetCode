/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = []
    
    const nums = [];
    for(let i=1; i<10; i++) nums.push(i)

    const dfs = (index, nums, cur, k, total) =>{
        if(total < 0) return;
        
        if(cur.length === k){
            if(total == 0){
                 result.push(cur.slice());
            }
            return
        }
        
        for(let i = index; i<nums.length ; i++ ){
          cur.push(nums[i]);
          // 현재 index에 다음값, 현재, 구해야하는 합에서 현재index빼기
          dfs(i+1, nums, cur, k, total - nums[i]);
          cur.pop();
        }
        
    }
    
    dfs(0, nums, [], k, n)
    return result
};
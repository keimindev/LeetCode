/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
      let n = nums.length;
    nums.sort((a,b) => a-b);
    let dp = new Array(n).fill(1);
    let maxLen = 1, maxIndex = 0;

    for(let i=1; i<n; i++) {
        for(let j=0; j<i; j++) {
            if(nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                if(maxLen < dp[i]) {
                    maxLen = dp[i];
                    maxIndex = i;
                }
            }
        }
    }

    let res = [];
    let num = nums[maxIndex];

    for(let i=maxIndex; i>=0; i--) {
        if(num % nums[i] == 0 && dp[i] == maxLen) {
            res.push(nums[i]);
            num = nums[i];
            maxLen--;
        }
    }

    return res;  
};
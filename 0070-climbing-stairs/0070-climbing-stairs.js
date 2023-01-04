/**
 * @param {number} n
 * @return {number}
 */

const cache = {
  "0": 1,
  "1": 1,
};

var climbStairs = function(n) {
   //피보나치 수열로 접근하라
   //첫 번째 항과 두 번째 항이 1이며 그 뒤의 항은 바로 앞 두 항의 합인 수열이다.
   //fib sequence f(n) = f(n-1) + f(n-2) 
    
   //base case
   //if (n <= 1) return 1;
   //otherwise this is basically fib sequence
   //return climbStairs(n - 1) + climbStairs(n - 2);  
   //fib sequende run time limit exceeded
    

  if (n <= 1) return 1;
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};
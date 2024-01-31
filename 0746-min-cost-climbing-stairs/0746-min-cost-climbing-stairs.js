/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length
   
    // 스텝값을 넣을 배열
    const dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]
    
    //0,1이 있으니깐 그 다음값을 구하기 위한 과정.....인데....
    // bottom up 방식으로 들어가니깐...
    for (let i = 2; i < n; i++) {
        //  = 20 + min(10,15) 결국엔 30이 됨. 10에서 20으로 뛰고 그 다음 넘어갔을경우값
        // 그 다음 3을 구할 필요가 없는 이유는 3의 값이 작다고 할지라도 0,1,2 다 거쳐간 만큼의 값이 나옴 
        dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1]);
    }
    // 지불된 스텝값 중에 최소값을 반환
    return Math.min(dp[n - 1], dp[n - 2])

};
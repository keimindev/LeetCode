/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(prices.length <= 1) return 0;
	// 생성하기~
    let costs = Array(k+1).fill(Number.MAX_SAFE_INTEGER);
    let profits = Array(k+1).fill(0);

    profits[0] = 0;
    costs[0] = prices[0];
    
    //순회하면서 값찾아가기
    for(let i = 0; i < prices.length; i++){
        for(let j = 1; j <= k; j++){
            profits[j] = Math.max(profits[j], prices[i] - costs[j]);  
            costs[j] = Math.min(costs[j], prices[i] - profits[j-1]);
        }
    }

    return profits[k];
};
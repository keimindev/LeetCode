/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowCost = Number.MAX_VALUE;
    let maxPocket = -prices[0];
    let profit1st = 0;
    let profit2nd = 0;
    for(let i = 0; i<prices.length; i++){
        lowCost = Math.min(lowCost, prices[i]);
        profit1st = Math.max(profit1st, prices[i] - lowCost);
        maxPocket = Math.max(maxPocket, profit1st - prices[i]);
        profit2nd = Math.max(profit2nd, maxPocket + prices[i]);
    }
   return profit2nd;
};
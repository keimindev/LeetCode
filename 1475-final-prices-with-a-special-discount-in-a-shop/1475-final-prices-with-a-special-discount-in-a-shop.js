/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    
    for(let i=0; i<prices.length; i++){
        let j=i+1;
        while(j<prices.length){
            if(prices[j]<=prices[i]){
                prices[i]=prices[i]-prices[j];
                break;
            }
            j++;
        }
    }
    return prices;
    
    
    // another solution
    
//     const stack = [];
    
//     for (let i = 0; i < prices.length; i++) {
//         let top = stack[stack.length - 1];
        
//         while (stack.length > 0 && prices[i] <= prices[top]) {
//             const index = stack.pop();
//             prices[index] = prices[index] - prices[i];
//             top = stack[stack.length - 1];
//         }
        
//         stack.push(i);
//     }
    
//     return prices;
};
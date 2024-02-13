/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const results = []
    
    for(let j=0; j<accounts.length; j++){
        let nums = 0;
        for(let i=0; i<accounts[j].length; i++ ){
            nums += accounts[j][i]
        }
        results.push(nums)
    }
    
    return Math.max(...results)
};
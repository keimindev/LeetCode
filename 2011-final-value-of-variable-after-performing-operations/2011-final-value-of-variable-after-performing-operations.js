/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const de = ["--X", "X--"];
    const inc = ["X++", "++X"];
    let result = 0;
    
    for(let i=0; i<operations.length; i++){
        if(de.includes(operations[i])){
            result -= 1
        }else if(inc.includes(operations[i])){
            result += 1
        }
    }
    
    return result
    
    // Time complexity : O(N)
 
};
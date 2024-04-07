/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // n -> arr
    // arr[i] -> Number().toString(2)   
    let result = []
    for(let i =0; i<n+1; i++){
       let temp = Number(i).toString(2)
       let num = Array.from(String(temp)).reduce((acc,cur) => Number(acc) + Number(cur))
       result.push(num)
    }
    
    return result
    
};
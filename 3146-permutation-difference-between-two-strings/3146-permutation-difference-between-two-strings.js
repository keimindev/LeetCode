/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let sArr = s.split('')
    let tArr = t.split('')
    let results = 0;
    
    for(let i=0; i<sArr.length; i++){
        const num = i - tArr.indexOf(sArr[i])
        results += Math.abs(num)
    }
    
    
    return results
    
    // time complexity : O(n)
};
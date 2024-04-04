/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sorted = heights.map((num) => num).sort((a, b) => a - b)
    let result = 0;
    
    if(heights === sorted) return 0
    
    for(let i=0; i< heights.length; i++){
        if(heights[i] != sorted[i]){
            result ++;
        }
    }
    
    return result
   
    
};
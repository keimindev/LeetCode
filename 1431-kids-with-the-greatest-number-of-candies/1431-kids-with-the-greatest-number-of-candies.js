/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatestN = Math.max(...candies)
    const result = []
    for(let i=0; i<candies.length; i++){
        if(candies[i]+extraCandies >= greatestN){
            result.push(true)
        }else{
            result.push(false)
        }
    }
    
    return result
    
};
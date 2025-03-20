/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map= {};
    let maxResultLength = 0;
    
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    
    for (const [key, value] of Object.entries(map)) {
        if (map[key - 1]) {
            maxResultLength = Math.max(maxResultLength, map[key - 1] + value);
        }
    }
    
    return maxResultLength;     
};
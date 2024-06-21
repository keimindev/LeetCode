/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    if(pref.length === 1) return pref
    
    let arr = [pref[0]]
    
    for(let i=1; i<pref.length; i++){
        let temp = pref[i-1] ^ pref[i];
        arr.push(temp)
    }
    
    return arr
    
    // time complexity : O(n)
};
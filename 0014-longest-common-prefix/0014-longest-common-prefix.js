/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(!strs.length) return ''; 
    for(let i = 0; i < strs[0].length; i++) {
        for(let char of strs) { 
            if(char[i] !== strs[0][i]) {
                return char.slice(0, i);
            }
        }
    }   
    return strs[0];

};
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    // 반복되나 체크?
    
    const rev = s.split('').reduce((char, cur) => cur+ char)
    let temp = {}
    let count = 0
    if(s === rev){
        count = 1
    }else{
        for(let char of s){
            if(!temp[char]){
                 temp[char] = 1
                 count++
             }
           }
        }
    
    return count
};
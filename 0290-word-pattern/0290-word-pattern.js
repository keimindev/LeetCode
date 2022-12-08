/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArr = s.split(' ')
 
    if(sArr.length != pattern.length) {return false;}
    
    let temp = {}
    
    for(let i=0; i< sArr.length ; i++){
         if (temp[pattern[i]]) {
            if (temp[pattern[i]] !== sArr[i]) {
                return false;
           } 
        } else {
            if (Object.values(temp).indexOf(sArr[i]) !== -1){
                return false;
            } else {
                 temp[pattern[i]] = sArr[i];
            }
        }
    }
       return true;
};
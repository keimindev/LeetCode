/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length <= numRows || numRows < 2) return s
    const rule = 2*(numRows-1);
    
    let result = Array(numRows).fill('');
    let tmep = 0;
    for(let i =0; i<s.length; i++){
        temp = i % rule ;
        if(temp < numRows){
            result[temp] += s[i];
        }else{
            result[rule - temp] += s[i];
        }
    }
    return result.join('');
};
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count = 0
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        if (char === '(') {
            // 0 이면 괄호가 한 텀 끝나는 것
            if (count !== 0) result += char
             count++  
        } else {
            count--
            if (count !== 0) result += char
        }
    }
    
    return result
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    backtracking(0, 0, '')
    return res
    
    function backtracking(open, close, cur){
        if(close > open || open > n) return
        
        if(open == n && close == n){
            res.push(cur) 
            return
        }
        backtracking(open + 1, close, cur + '(')
        backtracking(open, close + 1, cur + ')')
    }
};
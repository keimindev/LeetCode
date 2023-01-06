/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s == ' ') return true
  let temp = s.replace(/[^a-zA-Z0-9ㄱ-힣]/g, '').toLowerCase()
  let len = Math.floor([...temp].length / 2)
  let first = [...temp].splice(0,len)
  let second = [...temp].reverse().splice(0,len)
    
  let result = 0
  for(let i=0; i<first.length; i++){
      first[i] == second[i] ? 0 : result++
  }
  
    return result > 0 ? false : true
};
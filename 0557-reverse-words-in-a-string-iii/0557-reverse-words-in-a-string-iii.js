/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
let answer = []
  s = s.split(' ')
  
    for(let i=0; i<s.length; i++){
        let temp = s[i].split('').reverse().join('')
        i!== s.length -1 ? answer.push(temp + ' ') : answer.push(temp)
    }
   
    return answer.join('')
};
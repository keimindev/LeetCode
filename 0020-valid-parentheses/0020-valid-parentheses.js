/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }
    const arr = [];
    const open = Object.keys(map);
    
    //짝수가 아니면 무조건 false
    if(s.length % 2 !== 0) return false
    
    //짝수이면~ 
    for(let i = 0; i<s.length; i++){
     if( open.includes(s[i])){
       //열린 괄호이면 arr에 넣어주기
       arr.push(s[i])  
     }else{
       //닫힌 괄호이면 map에서 value값 찾아서 
       //arr에 있는 마지막 요소와 매치되는지 체크?
       //마지막요소와 매치가 되면 마지막 요소 제거- 
       //아니면 false 반환
    if(map[arr[arr.length - 1]] === s[i]){
        arr.pop()
    }else{
        return false;
    
      }
    } 
        
    }
    
    return arr.length == 0 ? true : false
   
};
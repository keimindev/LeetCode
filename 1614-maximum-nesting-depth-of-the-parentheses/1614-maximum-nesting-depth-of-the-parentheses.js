/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
 // 많은 괄호가 많이 있는 숫자를 찾아라?
 
 let count = 0; 
 let max = 0;
 
 for(let i=0; i<s.length; i++){
     if(s[i] == '('){
         count ++;
          if(max < count){
             max = count
         }
     }else if(s[i] == ')'){
         --count
        
     }

 }
    
   return max
    
};
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    // * index를 구한다. 그 인덱스의 앞부분을 삭제한다. 
    // 이걸 반복한다?
    const stackArr = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === "*" && stackArr.length){
            stackArr.pop();
        } else {
            stackArr.push(s[i]);
        }
    }
    return stackArr.join("");
   
};
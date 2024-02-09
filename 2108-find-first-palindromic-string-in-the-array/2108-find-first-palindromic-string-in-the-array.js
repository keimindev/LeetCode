/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // 배열의 각 요소가 반복되는 문자인지 확인? 
    // 발견즉시 바로 리턴? 
    let result = []
    for ( let char of words ){
        let rev = char.split('').reverse().join('');
        console.log(rev, char)
        if(char === rev){
            result.push(char)
        }
        
    }
    
    return result.length > 0 ? result[0] : ""
};
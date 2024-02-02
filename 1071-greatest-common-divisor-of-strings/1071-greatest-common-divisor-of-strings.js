/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 주어진 파라미터가 똑같지 않다면 바로 빈 문자열 반환
    if( str1+str2 != str2+str1) return ""
    
    // 재귀를 활용 
    // 주어진 파라마터들의 길이를 나눠서 나눔이 0이 되게끔
    // 그러면 0이 되게 만든 길이를 뽑아서 그 길이까지 잘라주면 
    // 반복되는 요소임
    function GCD(a, b) {
      if (a % b === 0) return b
         return GCD(b, a % b)
      }
    
    const length = GCD(str1.length, str2.length)
    return str2.slice(0, length)
};
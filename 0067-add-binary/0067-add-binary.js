/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //a와 b를 배열로 나누고 리버스
    let result = a.split("").reverse();
    let plus = b.split("").reverse();
    let r = 0;
    //각 길이별로 돌아가면서 더합니다 문자를 진수로 바꿉니다 parseInt
    for (let i = 0, j = 0; i <= result.length-1 || j<=plus.length-1 || r > 0; i++, j++) {
        let sum = (parseInt(result[i])||0) + (parseInt(plus[j])||0) + r
        if (sum>1) {
            result[i]=sum%2
            r = 1;
        } else {
            result[i]=sum;
            r=0;
        }
        
    }
    
    return result.reverse().join("")
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 빈 공간까지 포함해서 배열로 변경 
    // 배열리버스 후에 
    // 다시 스트링으로 연결?
    let wordArr = []
    s = s.split(' ').reverse()
    s.forEach((w) => {
        if(w != ''){
            wordArr.push(w)
        }
    })
    
    return wordArr.join(" ")

};
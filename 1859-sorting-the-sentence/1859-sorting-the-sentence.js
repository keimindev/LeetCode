/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // arr로 변환하고 요소의 마지막 인덱스를 뽑아서 sort하면?
    const arr = s.split(' ')
    .sort((a, b) => a[a.length -1] - b[b.length -1])
    .map((char) => char.slice(0,char.length -1))
    .join(' ')
    
    return arr
};
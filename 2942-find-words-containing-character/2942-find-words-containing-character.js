/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    // 요소를 돌면서 인덱스를 리턴하게 하면?
    let results = [];
    words.map((word,i) => {
        if(word.includes(x)){
            results.push(i)
        }
    })
    
    return results
};
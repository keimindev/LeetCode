/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch) + 1
    const arr = word.split('')
    const reverse = arr.slice(0,index).reverse().join('')
    const left = arr.slice(index,word.length).join('')
    return reverse + left


    
};
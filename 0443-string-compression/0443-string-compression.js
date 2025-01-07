/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let j = 0;
    while (i < chars.length) {
        let count = 0;
        let char = chars[i];
        while (i < chars.length && chars[i] === char) {
            count++;
            i++;
        }
        chars[j] = char;
        j++;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[j] = digit;
                j++;
            }
        }
    }
    chars.length = j;
    return j;
};
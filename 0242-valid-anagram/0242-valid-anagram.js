/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return buildArr(s) === buildArr(t)
};


const buildArr = (str) => {
    return str.toLowerCase().split('').sort().join("")
}
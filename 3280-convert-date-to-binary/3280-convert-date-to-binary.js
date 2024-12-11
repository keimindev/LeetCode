/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const str = date.split("-");
    const arr = str.map((s) => Number(s).toString(2))
    return arr.join('-')
};
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let result = 0;
  let arr = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  for (let i = 0; i < columnTitle.length; i++) {
    result += (arr.indexOf(columnTitle[i]) + 1) * Math.pow(26, columnTitle.length - i - 1);
  }

  return result;
};
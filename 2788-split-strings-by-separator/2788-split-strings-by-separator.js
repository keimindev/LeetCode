/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
  let result = []
  for (let val of words) {
    if (val.includes(separator)) {
      let temp = val.split(separator).filter((el) => el != "")
      result.push(...temp)
    } else {
      result.push(val)
    }
  }
  return result
};
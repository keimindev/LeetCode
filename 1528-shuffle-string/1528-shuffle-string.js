/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const result = new Array(indices.length)
  
  indices.forEach((index, i) => {
    result[index] = s[i]
  })
  
  return result.join('')
};
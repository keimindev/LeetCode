/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let temp = "";
  for (let i = 0; i < s.length; i += k) {
    if ((i / k) % 2 == 0) temp += [...s.substr(i, k)].reverse().join("");
    else temp += s.substr(i, k);
  }
  return temp;
};
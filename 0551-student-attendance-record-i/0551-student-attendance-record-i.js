/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
     if (s.length < 2) {
        return true;
    }
  let num = [0];

  for (let i = 0; i < s.length; i++) {
    if(s[i] == "A") {
      num++;
      if (num == 2) {
        return false;
      }
    } else if (s[i - 2] == "L" && s[i - 1] == "L" && s[i] == "L") {
      return false;
    }
  }

  return true;
};
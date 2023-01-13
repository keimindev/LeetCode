/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) {
    return false;
  }
  if (n == 1) {
    return true;
  }

  let result = n;

  while (result > 3) {
    result /= 3;
  }

  if (result % 3 != 0) {
    return false;
  } else {
    return true;
  }
};
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const result = [];
    
  for (let i = 0; i < asteroids.length; i++) {
    let last = result[result.length - 1];
    let current = asteroids[i];

    if (!result.length || (last < 0) || (current > 0)) {
      result.push(current);
    } else if (-current == last) {
      result.pop();
    } else if (-current > last) {
      result.pop();
      i--;
    }
  }
  return result;
};
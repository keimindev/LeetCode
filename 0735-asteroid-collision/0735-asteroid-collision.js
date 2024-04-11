/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    // 양수와 양수는 괜찮, 
    // 양수와 음수가 만나서 더했을 대 음수가 크면 양수랑 음수 둘 다 없어짐
    // 양수와 음수가 만났을 때 양수가 더 크면 음수가 없어짐

  const result = [];
    
  for (let i = 0; i < asteroids.length; i++) {
    let last = result[result.length - 1];
    let current = asteroids[i];

    if (!result.length | (last < 0) | (current > 0)) {
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
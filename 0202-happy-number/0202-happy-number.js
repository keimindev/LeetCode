/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const stack = [];
    stack.push(divide(n));
    while (true) {
        const f = stack[stack.length - 1];
        const n = divide(f);
        if (n === 1) return true;
        if (stack.includes(n)) return false;
        stack.push(n);
    }
};


function divide(n) {
    const nums = String(n).split("");
    const sum = nums.reduce((pre, cur) => {
        const squared = Math.pow(Number(cur), 2);
        return pre += squared;
    }, 0)
    return sum;
}
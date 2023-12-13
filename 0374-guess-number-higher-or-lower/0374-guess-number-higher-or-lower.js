/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    // 주어진 수를 반으로 나뉘서 진행 . 
    // 왼쪽을 시작점 , 오른쪽을 끝점

    let left = 1, right = n
    
    // 시작점이 끝점보다 작다는 과정으로 시작 
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        const current = guess(mid)
        if (current === 0) return mid
        if (current === -1) right = mid
        else left = mid + 1
    }
    return left
};
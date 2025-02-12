/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};

    return function(...args) {
        
        // hash table이 key를 이용해서 사용한다
        const key = JSON.stringify(args);

        // 만약에 cache에 해당 key가 있으면 cache에서 값을 가져온다
        // 같은 값이 있으면 여기서 걸러준다
        if(key in cache){
            return cache[key]
        }

        const result = fn(...args);

        cache[key] = result;
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
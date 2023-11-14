/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combination = (arr, count) => {
    const result = [];
    
    // 주어진 인덱스가 1이면 그 해당 값만 배열에 담아서 넣기
    if(count === 1){
        return arr.map((val) => [val]);
    }
    
    arr.forEach((fixed, index, origin) => {
        // 고정될 값을 제외한 값 구하기
        const rest = origin.slice(index + 1);
        
        // 제외된 배열과  주어진 인덱스를 한 줄 줄이기
        const cb = combination(rest, count - 1);
        const attached = cb.map((c) => [fixed, ...c]);
        
        result.push(...attached);
    });
    
    return result;
}

const combine = (n, k) => {
    const array = [];
    
    for(let i = 1; i <= n; i++){
        array.push(i);
    }
    
    // 재귀
    return combination(array, k);
};


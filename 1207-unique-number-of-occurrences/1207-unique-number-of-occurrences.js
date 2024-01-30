/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // 종복을 없엔 배열 하나 만들고 
    // 그 배열의 요소를 필터로 해서 뽑아내면?
    
    const newArr = new Set(arr);
    
    const temp = [...newArr].map((v) => arr.reduce((cnt, item) => cnt + (item == v), 0));

    const setTemp = new Set(temp);

    return setTemp.size < temp.length ? false:true

};
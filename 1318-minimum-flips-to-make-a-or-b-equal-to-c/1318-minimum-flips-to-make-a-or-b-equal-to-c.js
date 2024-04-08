/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    console.log(a.toString(2))
    console.log(b.toString(2))
    console.log(c.toString(2))
    
    // 이진수로 변경
    // 길이 비교후에 제일 긴 자리를 기준점으로 
    // length 비교 후 c를 타켓으로 loop하면서 비교 시작 
    // 뒷자리부터 하나씩 앞으로 쫓아오면서 다르면 +1 씩 
    
    const target = c.toString(2);
    const bitA = a.toString(2);
    const bitB = b.toString(2);
    const size = Math.max(target.length, bitA.length, bitB.length);
    let position = -1;
    let result = 0;

    for (let index = 0; index < size; index++) {
        const value = target.at(position) ?? '0';
        const valueA = bitA.at(position) ?? '0';
        const valueB = bitB.at(position) ?? '0';

        position -= 1;
        if (value === '0') {
            if (valueA === '1') result += 1;
            if (valueB === '1') result += 1;
        } else {
            if (valueA === '1' || valueB === '1') continue;
            result += 1;
        }
    }
    return result;
};
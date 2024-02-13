/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const len = mat.length;
    let sum = 0;
    
    mat.forEach((row, i) => {
        const l = i;
        const r = len - i - 1;
        sum += l === r ? row[l] : row[l] + row[r];
    });
    
    return sum;
};
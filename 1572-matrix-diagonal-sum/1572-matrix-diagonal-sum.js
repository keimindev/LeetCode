/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const sum = [];
    
    let startRow = 0;
    let endRow = mat.length - 1;
    let startCol = 0;
    let endCol = mat.length -1;
    
    while(startRow <= endRow && startCol <= endCol){
        for(let i = startRow; i<=endRow; i++){
            if(startRow === startCol || endRow === endCol){
                sum.push(mat[startRow][i])
            }
            
            startRow++
       }
    
         
        startRow = 0
        for(let i = endCol; i>=startCol; i--){
            if(endCol != startRow && endRow != startCol){
                console.log(endCol, endRow,startRow,)
                sum.push(mat[i][startRow])
                
            }
            endCol--
            startRow++
        }
        
        const add = sum.reduce((acc, cur) => acc += cur)
        console.log(sum, add)
        return add
        
        
    }
};
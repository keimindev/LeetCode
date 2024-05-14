/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let temp1 = 0
    let temp2 = 0;
    
    for(let i=1; i<n+1; i++){
        if(i % m != 0){
            temp1 += i
        }else{
            temp2 += i
        }
    }
    
    return temp1 - temp2
};
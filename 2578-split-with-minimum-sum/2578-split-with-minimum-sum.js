/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    num = String(num).split('').map(Number);
    num = num.sort()
    let left = '';
    let right = '';
    for(let i in num){  
        if(i%2==0){
            left += num[i];
        }else { 
            right += num[i];
        }
    }
    
    return parseInt(left) + parseInt(right)
};
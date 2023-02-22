/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // let len = numbers.length;
    // for (let i = 0; i < len-1; i++) {
    //     for (let j = i+1; j< len; j++) {
    //         if(numbers[i]+numbers[j] == target){
    //             return [i+1,j+1];
    //         }
    //     }
    // }
    // return null;
    
    let i = 0;
    let j = numbers.length-1;
    
    while (i < j) {
        sum = numbers[i] + numbers[j];
        if (sum === target) break;
        
        if (sum > target) j-=1;
        else if (sum < target) i+=1;
    }
    return [i+1, j+1];
};
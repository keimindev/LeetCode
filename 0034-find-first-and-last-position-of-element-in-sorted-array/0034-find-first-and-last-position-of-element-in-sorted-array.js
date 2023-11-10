/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let temp =[]
   
    if(nums.length == 0) {
        return [-1, -1]
    }else{
    
    for(let i=0; i<nums.length; i++ ){
        if(nums[i] === target){
            temp.push(i)
        }
    }
    
    if(temp.length == 0){
        temp= [-1, -1]
    }else{
        temp = [temp[0], temp[temp.length-1]]
    }
    }
    
    return temp 
    
};
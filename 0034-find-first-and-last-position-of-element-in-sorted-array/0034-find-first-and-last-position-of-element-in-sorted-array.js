/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let temp =[]
   
    // 주어진 인지의 길이가 0일 때 
    if(nums.length == 0) {
        return [-1, -1]
        
    // 인자의 길이가 0이 아닐 때
    }else{
        
        //선형검색으로 돌면서 해당 target 인덱스 찾아서 array에 넣어주기
    for(let i=0; i<nums.length; i++ ){
        if(nums[i] === target){
            temp.push(i)
        }
    }
    
    // 만약에 맞는게 없어서 인덱스가 안 들어갔다면 
    if(temp.length == 0){
        temp= [-1, -1]
        
    // 들어간 인덱스가 있다면 제일 처음꺼랑 제일 끝부분만 찾아서 넣어주기 
    }else{
        temp = [temp[0], temp[temp.length-1]]
    }
    }
    
    return temp 
    
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const alice = []
    const bob = []
    const result = []
    const arr = nums.sort((a,b) => a-b)
    for(let i=1; i<nums.length+1; i++){
        if(i % 2 === 0){
            bob.push(nums[i-1])
        } else{
            alice.push(nums[i-1])
        }
    }
    
    for(let j=0; j<nums.length / 2; j++){
        result.push(bob[j])
        result.push(alice[j])
    }
    
    return result
    
    
    
//     const res = []
//     const numSrt =  nums.sort(function(a,b){return b-a})

//     for(let i=0;i<nums.length;i+=2){
//         res.unshift(nums[i+1])
//         res.unshift(nums[i])
//     }

//     return res
};

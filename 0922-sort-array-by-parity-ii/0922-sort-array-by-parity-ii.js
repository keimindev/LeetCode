/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let odd = []
    let even = []
    let result = []
    nums.map((num) => {
        if(num % 2){
            odd.push(num)
        }else{
            even.push(num)
        }
    })

    
    for(let i=0; i<odd.length; i++){
        result.push(even[i])
        result.push(odd[i])
    }
    
    return result
};
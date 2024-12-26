/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {

//Time limit exceeded code
//     const tArr = [...t]
//     let results = 0
//     const sArr = [...s]
    
//     for(let i=0; i<tArr.length; i++){
//         if(sArr.includes(tArr[i])){
//             const idx = sArr.indexOf(tArr[i])   
//             sArr.splice(idx,1)
//         }else{
//             results++
//         }
//     }
//     return results
   
    var s_arr = new Array(26).fill(0);
    
    for(let i=0; i<s.length; i++){
        s_arr[s[i].charCodeAt(0)-97]++;
    }
    for(let i=0; i<t.length; i++){
        var charIndex = t[i].charCodeAt(0)-97
        if(s_arr[charIndex] > 0){
            s_arr[charIndex]--;
        }
    }
    return s_arr.reduce((a,b) =>a+b)
};
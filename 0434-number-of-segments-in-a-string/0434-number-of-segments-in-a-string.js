/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arrS = s.split(' ')
    let arr = []
    for(let temp of arrS){
        if(temp.length > 0){
            console.log(temp)
            arr.push(temp)
        }
    }
    return arr.length < 1 ? 0 : arr.length
  
};
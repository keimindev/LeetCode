/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result = []
    for(let i=0; i<words.length; i++){
        for(let j= 0; j<words.length; j++){
            if(words[i].includes(words[j]) && words[i].length != words[j].length ){
                if(!result.includes(words[j])){
                    result.push(words[j])
                }
             
            }
        }
    }
    
    return result
};
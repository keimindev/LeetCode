/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // path [/home]
    const arrPath = path.split('/')
    const result = [];
    
    // "/"
    for(let i=0; i<arrPath.length; i++){
        if(arrPath[i] != "." && arrPath[i] != "" && arrPath[i] != ".."){
            result.push(arrPath[i])
        }else if(arrPath[i] === "..")
            result.pop()

    }
  
    return "/" + result.join("/")
   
};
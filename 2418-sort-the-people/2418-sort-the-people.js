/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let ob = {}
    let result = []
    
    heights.map((h, i) => {
        ob[h] = names[i]
    })
    
   var sortable = [];
   for (let name in ob) {
      sortable.push([name, ob[name]]);
    }
 console.log(sortable)
  sortable
      .sort((a, b) => b[0] - a[0])
      .map((name) => {
          result.push(name[1])
  })
    
    return result

};


//     let output = []
    
// 	// let's concatenate the arrays to sort later
//     for (let i in heights) {
//         output.push({name: names[i], height: heights[i]})
//     }
    
//     return output
//         .sort((a,b) => b.height - a.height) // sort
//         .map(i => i.name) // cut needed

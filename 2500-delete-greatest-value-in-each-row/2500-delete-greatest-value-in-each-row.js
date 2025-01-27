/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    // sort Ascending
    grid.forEach(row => row.sort((a, b) => a - b))
    // create sum variable
    let sum = 0

    // it has to loop untill end length
    while (grid[0].length) {

        // for each column
        let column = []

        // each row max value in last position
        for (let row of grid) column.push(row.pop())
        // put each max values and compares
        sum += Math.max(...column)
    }

    return sum
    
};
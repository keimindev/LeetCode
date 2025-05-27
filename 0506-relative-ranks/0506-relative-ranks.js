/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let ranks=[]
    let sorted = [...score].sort((a, b) => b - a)
    const results = [];

    for (let i = 0; i < score.length; i++) {
        if (sorted.indexOf(score[i]) == 0) {
            ranks.push("Gold Medal")
        }
        else if (sorted.indexOf(score[i]) == 1) {
            ranks.push("Silver Medal")
        } else if (sorted.indexOf(score[i]) == 2) {
            ranks.push("Bronze Medal")
        } else { ranks.push(`${sorted.indexOf(score[i])+1}`)}
    }
return ranks
 
};
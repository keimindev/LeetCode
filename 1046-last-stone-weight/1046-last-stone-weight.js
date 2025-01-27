/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // stones.sort((a,b) => a - b)

    // while(stones.length > 1){
    //     if(stones[stones.length-1] != stones[stones.length-2]){
    //         stones.pop()
    //         stones.pop()
    //         stones.push(stones[stones.length-1] - stones[stones.length-2])
    //     }else if(stones[stones.length-1] == stones[stones.length-2]){
    //         stones.pop()
    //         stones.pop()
    //     }
    // }

    // return stones[0]

    while(stones.length > 1){
        stones.sort((a,b) => b - a)
        stones[1] = stones[0] - stones[1]
        stones.shift();
    }

    return stones[0]

};
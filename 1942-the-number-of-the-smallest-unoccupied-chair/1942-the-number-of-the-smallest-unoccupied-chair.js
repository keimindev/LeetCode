/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    // Add an index to each friend
    for (let i=0; i<times.length; i++) {
        times[i].push(i);
    }

    times.sort((a,b) => a[0] - b[0])
    let seat = [];

    for(let friend of times){
        let i=0;
        if(seat.length == 0) seat.push(friend[1])
        else {
            while(seat[i] > friend[0]){
                i++
            }
            if(i < seat.length){
                seat[i] = friend[1];
            }else{
                seat.push(friend[1])
            }
        }

        // Check if the current friend is target friend
        if (friend[2] == targetFriend) {
            return i;
        }
    }
  return 0;

};
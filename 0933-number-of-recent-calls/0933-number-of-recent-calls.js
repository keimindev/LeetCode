
var RecentCounter = function() {
    this.result = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.result.push(t);
    while (this.result[0] < t - 3000) {
        this.result.shift();
    }
    return this.result.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : function(otherValue){
            if(val !== otherValue){
                throw new Error("Not Equal")
            }
            return true
        },

        notToBe : function(otherValue){
            if(val === otherValue){
                throw new Error("Equal")
            }

            return true
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
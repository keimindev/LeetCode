/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let m = s.length;
    let n = t.length;

    let i, j;
    for (i = 0, j = 0; i < m && j < n; ) {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            j++; 
        }
    }

    return i === m;
};
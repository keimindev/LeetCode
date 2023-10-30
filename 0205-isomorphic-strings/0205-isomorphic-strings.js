/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    if(s.length !== t.length) return false;

    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }

    return true;
}
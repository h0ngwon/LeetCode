/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let arr = [];
    let i = 0;
    
    for(let j = 0; j < t.length; j++) {
        if(t[j] === s[i]) {
            arr.push(t[j]);
            i++;
        }else continue;
    }
    
    let result = arr.join('');
    
    if(result === s) return true;
    else return false
};
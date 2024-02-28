/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const str = s.trim().split('')
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ' && str[i + 1] === ' ') {
            str.splice(i, 1);
            i--;
        }
    }
    
    const result = str.join('').split(' ').reverse().join(' ');
    console.log(result)
    
    return result;
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = [];
    
    s.split('').map((c, idx) => {
        if(vowels.includes(c)) {
            arr.push(c);
        }
    });
    
    let result = s.split('');
    
    result.map((c, idx) => {
        if(vowels.includes(c)) {
            result.splice(idx, 1, arr.pop())
        }
    });
    
    return result.join('')
};
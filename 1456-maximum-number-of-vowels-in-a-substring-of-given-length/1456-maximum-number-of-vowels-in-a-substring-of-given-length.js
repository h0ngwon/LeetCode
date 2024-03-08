/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = 'aeiou';
    let startWindow = 0;
    let max = -Infinity;
    let sum = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            sum++;
        }
        
        if(i - startWindow === k - 1) {
            max = Math.max(max, sum);
            if(vowels.includes(s[startWindow])) {
                sum--;
            }
            startWindow++;
        }
    }
    
    return max;
};
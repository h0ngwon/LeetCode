/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0, len = 0;
    
    while(i < chars.length) {
        let curr = chars[i];
        chars[len++] = curr;
        
        let cnt = 0;
        
        while(i < chars.length && curr === chars[i]) {
            cnt++;
            i++;
        }
        
        if(cnt > 1) {
            cnt = cnt.toString().split('')
            for(let c of cnt) {
                chars[len++] = c;
            }
        }
    }
    
    return len;
};
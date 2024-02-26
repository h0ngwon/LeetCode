/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 != str2 + str1) return "";
    
    //최대 공약수를 찾아서 그 길이만큼 자르기
    const gcd = (a, b) => {
        if(a % b === 0) return b;
        return gcd(b, a % b);
    }
    
    const len = gcd(str1.length, str2.length);
    
    return str2.slice(0, len);
};
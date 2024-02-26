/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let str = '';
    let length = word1.length > word2.length ? word1.length : word2.length;
    
    for(let i = 0; i < length; i++) {
        if(word1[i])
        str += word1[i];

        if(word2[i])
        str += word2[i];
    }

    return str
};
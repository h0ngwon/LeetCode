/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if(word1.length !== word2.length) return false;
  
  const first = get(word1);
  const second = get(word2);
  
  return first[0] === second[0] && first[1] === second[1]
};

const get = (word) => {
    const map = {};
    
    for(let i = 0; i < word.length; i++) {
        if(!map[word[i]]) {
            map[word[i]] = 1;
        }else map[word[i]]++;
    }
    
    return [Object.keys(map).sort((a, b) => a > b ? -1: 1).join(''), Object.values(map).sort((a, b) => a - b).join('')];
}
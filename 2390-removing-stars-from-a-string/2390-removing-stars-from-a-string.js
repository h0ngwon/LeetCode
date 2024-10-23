/**
 * @param {string} s
 * @return {string}
 */

// 1. 별이 아니면 stack에 문자 넣기
// 2. 별을 만나면 stack에서 제거

var removeStars = function(s) {
  const stack = [];
  
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== "*") {
      stack.push(s[i]);
    }else {
      stack.pop();
    }
  }
  
  return stack.join("");
};
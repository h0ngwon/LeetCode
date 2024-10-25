/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    let stack = [];
    let curStr = "";
    let curCnt = "";
    
    s.split("").forEach((el) => {
        if(el === "[") {
            stack.push(curCnt);
            stack.push(curStr);
            curStr = "";
            curCnt = "";
        }else if(el === "]") {
            let prevStr = stack.pop();
            let prevCnt = stack.pop();
            curStr = prevStr + curStr.repeat(Number(prevCnt));
        }else if('0' <= el && el <= '9') {
            curCnt += el;
        }else {
            curStr += el;
        }
    });
    
    return curStr;
};
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

// 1. stack이 양수이면 push
// 2. stack이 음수라면
// 2-1. 현재 음수보다 작을경우 -> 큰 값을 만날때까지 pop
// 2-2. 현재 음수랑 같을경우 -> pop
// 3. stack return
var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for(let i = 0; i < asteroids.length; i++) {
        if(asteroids[i] > 0) {
            stack.push(asteroids[i]);
        }else {
            while(stack.length && stack[stack.length - 1] > 0 && -asteroids[i] > stack[stack.length - 1]) {
                stack.pop();
            }
            
            if(-asteroids[i] === stack[stack.length - 1]) {
                stack.pop();
            }else if(stack.length === 0 || stack[stack.length - 1] < 0){
                stack.push(asteroids[i]);
            }
        }
    }
    
    return stack;
};
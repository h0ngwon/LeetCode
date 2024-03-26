/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // 0이 k개 포함되어있는 구간찾기
    // 처음인덱스가 0으로 같으므로 output은 무조건 1 부터
    
    let startWindow = 0;
    let max = -Infinity;
    let cnt = 0;
    
    for(let lastWindow = 0; lastWindow < nums.length; lastWindow++) {
        if(nums[lastWindow] === 0) cnt++;
        
        if(cnt > k) {
            while(cnt > k) {
                if(nums[startWindow] === 0) {
                    cnt--;
                }
                startWindow++;
            }
        }
        
        max = Math.max(max, lastWindow - startWindow + 1);
    }
    
    return max;
};
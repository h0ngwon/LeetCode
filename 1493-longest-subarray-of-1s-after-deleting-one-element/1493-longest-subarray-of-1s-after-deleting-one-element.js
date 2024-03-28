/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // 처음부터 시작해서 0이 2개 등장하면 인덱스 감소 후 계산
    let cur = 0, prev = 0, max = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) cur++;
        else {
            prev = cur;
            cur = 0;
            //max = Math.max(max, prev + cur);
        }
        
        max = Math.max(max, prev + cur);
    }
    
    return max === nums.length ? max - 1 : max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let cur = 0, prev = 0, max = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) cur++;
        else {
            prev = cur;
            cur = 0;
        }
        max = Math.max(max, prev + cur);
        console.log(i, max, prev)
    }
    
    return max === nums.length ? max - 1 : max;
};
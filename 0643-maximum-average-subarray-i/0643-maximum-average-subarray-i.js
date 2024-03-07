/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    let startWindow = 0;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if(i - startWindow === k - 1) {
            let avg = sum / k;
            max = Math.max(max, avg);
            sum -= nums[startWindow];
            startWindow++;
        }
    }
    
    return max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, cur) => acc + cur, 0);
    
    for(let i = 0; i < nums.length; i++) {
        leftSum += (nums[i - 1] || 0);
        rightSum -= nums[i];
        
        if(leftSum === rightSum) {
            return i;
        }
    }
    
    return -1;
};
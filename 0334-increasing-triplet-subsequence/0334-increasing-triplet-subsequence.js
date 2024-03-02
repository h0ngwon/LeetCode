/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let a = Infinity;
    let b = Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= a) a = nums[i];
        if(nums[i] > a && nums[i] <= b) b = nums[i];
        if(nums[i] > a && nums[i] > b) return true;
    }
    return false
    
};
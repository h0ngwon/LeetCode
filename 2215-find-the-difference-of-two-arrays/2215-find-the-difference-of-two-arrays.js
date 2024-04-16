/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let result = [];
    let arr1 = [], arr2 = [];
    
    nums1.map((x) => {
        if(!nums2.includes(x) && !arr1.includes(x)) {
            arr1.push(x);
        }
    });
    
    nums2.map((x) => {
        if(!nums1.includes(x) && !arr2.includes(x)) {
            arr2.push(x);
        }
    });
    
    result.push(arr1);
    result.push(arr2);
    
    return result;
};
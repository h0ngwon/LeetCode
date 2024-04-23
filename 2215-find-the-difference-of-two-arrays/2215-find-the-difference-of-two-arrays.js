/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [
        [...new Set(nums1)].filter((e) => !nums2.includes(e)),
        [...new Set(nums2)].filter((e) => !nums1.includes(e)),
    ];
};
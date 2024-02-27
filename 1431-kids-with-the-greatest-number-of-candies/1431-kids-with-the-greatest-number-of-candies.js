/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = []
    
    candies.map(c => c + extraCandies >= Math.max(...candies) ? result.push(true) : result.push(false));
    
    return result;
};
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let result = [0,];
    let sum = 0;
    
    for(let i = 0; i < gain.length; i++) {
        sum += gain[i];
        result.push(sum);
    }
    
    return Math.max(...result)
};
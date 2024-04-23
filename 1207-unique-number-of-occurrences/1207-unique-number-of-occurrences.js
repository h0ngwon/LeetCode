/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let numMap = new Map();
    let mapArr = [];
    
    arr.map((e) => (numMap.set(e, 0)));
    
    arr.map((e) => (
        numMap.set(e, numMap.get(e) + 1)
    ));
    
    mapArr = [...numMap.values()];
    
    let numSet = new Set(mapArr);
    
    
    return numSet.size < mapArr.length ? false: true;
    
};
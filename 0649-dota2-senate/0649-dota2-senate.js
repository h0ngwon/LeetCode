/**
 * @param {string} senate
 * @return {string}
 */

// R과 D가 만나면 상쇄
var predictPartyVictory = function(senate) {
    const radiant = [];
    const dire = [];
    
    for(let i = 0; i < senate.length; i++) {
        if(senate[i] === "R") {
            radiant.push(i);
        }else {
            dire.push(i);
        }
    }
    
    while(radiant.length > 0 && dire.length > 0) {
        let rIdx = radiant.shift();
        let dIdx = dire.shift();
        
        if(rIdx < dIdx) {
            radiant.push(rIdx + senate.length);
        }else {
            dire.push(dIdx + senate.length);
        }
    }
    
    return radiant.length ? "Radiant" : "Dire"
};
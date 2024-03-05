/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 앞과 뒤에서 인덱스 옮기면서 넓이값 비교
    // 둘 중 값이 작은 막대로 계산해야 영역
    // 두 값 중 작은값 포인터 옮기기
    
    let i = 0;
    let j = height.length - 1;
    let answer = 0;
    
    while(i < j) {
        const area = (j - i) * Math.min(height[i], height[j]);
        answer = answer > area ? answer : area;
        
        if(height[j] < height[i]) {
            const cur = height[j];
            
            while(j >= 0 && height[j] <= cur) {
                j--;
            }
        }else {
            const cur = height[i];
            
            while(i < height.length && height[i] <= cur) {
                i++;
            }
        }
    }
    
    return answer;
};
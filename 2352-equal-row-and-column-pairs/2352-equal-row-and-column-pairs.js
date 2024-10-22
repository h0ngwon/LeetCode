/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  //row 전부 저장, col 전부 저장
  let rowList = [];
  let colList = [];
  let answer = 0;
  
  for(let i = 0; i < grid.length; i++) {
    let row = "";
    let col = "";
    
    for(let j = 0; j < grid[i].length; j++) {
      row += `${grid[i][j]} `
      col += `${grid[j][i]} `
    }
    
    rowList.push(row);
    colList.push(col);
  }
  
  for(let i = 0; i < rowList.length; i++) {
    for(let j = 0; j < colList.length; j++) {
      if(rowList[i] === colList[j]) {
        answer++;
      }
    }
  }
  
  return answer;
};
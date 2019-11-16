function minesweeper(matrix: boolean[][]): number[][] {
  const lenX = matrix[0].length - 1
  const lenY = matrix.length - 1
  const resultMatrix = []

  for(let i = 0; i < matrix.length; i++) {
    const currentRow = []
    for(let j = 0; j < matrix[i].length; j++) {
      let neighbors = 0

      // Count 8 neighbors
      if(i > 0 && j > 0 && matrix[i - 1][j - 1] === true) {
        neighbors++
      }
      if(j > 0 && matrix[i][j - 1] === true) {
        neighbors++
      }
      if(i > 0 && matrix[i - 1][j] === true) {
        neighbors++
      }
      if(i < lenY && j > 0 && matrix[i + 1][j-1] === true) {
        neighbors++
      }
      if(j < lenX && i > 0 && matrix[i - 1][j + 1] === true) {
        neighbors++
      }
      if(i < lenY && matrix[i + 1][j] === true) {
        neighbors++
      }
      if(j < lenX && matrix[i][j+1] === true) {
        neighbors++
      }
      if(i < lenY && j < lenX && matrix[i+1][j+1] === true) {
        neighbors++
      }
      currentRow.push(neighbors)

    }
    resultMatrix.push(currentRow)
  }
  
  return resultMatrix
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));
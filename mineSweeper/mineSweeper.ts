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

/*
Pyhton

def minesweeper(matrix):
  lenX = len(matrix[0]) - 1
  lenY = len(matrix) - 1
  resultMatrix = []

  for i,row in enumerate(matrix):
    currentRow = []
    for j,col in enumerate(row):
      neighbors = 0

      # Count 8 neighbors
      # top 3 elments
      
      if i > 0 and j > 0 and matrix[i - 1][j - 1] == True:
        neighbors += 1
      if j < lenX and i > 0 and matrix[i - 1][j + 1] == True:
        neighbors += 1
      if i > 0 and matrix[i - 1][j] == True:
        neighbors += 1
      
      # left and right 
      if j > 0 and matrix[i][j - 1] == True:
        neighbors += 1
      if j < lenX and matrix[i][j+1] == True:
        neighbors += 1
      
      # bottom 3 elements
      if i < lenY and matrix[i + 1][j] == True:
        neighbors += 1
      
      if i < lenY and j < lenX and matrix[i+1][j+1] == True:
        neighbors += 1
      if i < lenY and j > 0 and matrix[i + 1][j-1] == True:
        neighbors += 1
      currentRow.append(neighbors)

    resultMatrix.append(currentRow)
  
  return resultMatrix


print(minesweeper([[True, False, False],
                  [False, True, False],
                  [False, False, False]]));
*/
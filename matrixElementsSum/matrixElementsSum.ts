function matrixElementsSum(matrix: any[][]): number {
  let sum = 0
  
  for(let i = 0; i < matrix.length - 1; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        matrix[i+1][j] = 0
      } else {
        sum += matrix[i][j]
      }
    }
  }
  
  return sum
}

// O(nm)

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));

/*
Phyton

def matrixElementsSum(matrix):
  sum = 0
  canceledIndex = list()
  
  for i, row in enumerate(matrix):
    for j, col in enumerate(row):
      if col == 0:
        canceledIndex.append(j)
      elif j not in canceledIndex:
        sum += col

  return sum


print(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
*/
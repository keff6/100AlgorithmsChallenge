function crossingSum(matrix: number[][], a: number, b: number): number {
  const row = matrix[a]
  const col = []
  
  for(let i = 0; i < matrix.length; i++) {
    if(i !== a)  col.push(matrix[i][b])
  }
  
  return [...row, ...col].reduce((acc, curr) => acc += curr)
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));
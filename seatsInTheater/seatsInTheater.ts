function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
  const colsObstructed = nCols - (col - 1);
  const rowsObstructed = nRows - row
  
  return colsObstructed * rowsObstructed
}

console.log(seatsInTheater(16, 11, 5, 3));

/*
python
def seatsInTheater(nCols, nRows, col, row):
  colsObstructed = nCols - (col - 1);
  rowsObstructed = nRows - row
  
  return colsObstructed * rowsObstructed

print(seatsInTheater(16, 11, 5, 3));
*/
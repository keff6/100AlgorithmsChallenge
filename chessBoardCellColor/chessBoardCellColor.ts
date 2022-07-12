function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const letterOrder = 'abcdefgh';
  const total1 = (letterOrder.indexOf(cell1[0].toLowerCase()) + 1) + +cell1[1];
  const total2 = (letterOrder.indexOf(cell2[0].toLowerCase()) + 1) + +cell2[1];
  return  total1 % 2 === total2 % 2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

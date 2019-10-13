function bishopAndPawn(bishop: string, pawn: string): boolean {
  const letterPosition = {
    a: 1, b: 2, c: 3, d: 4,
    e: 5, f: 6, g: 7, h: 8,
  }
  const [bishopX, bishopY] = [letterPosition[bishop[0]], parseInt(bishop[1])];
  const [pawnX, pawnY] = [letterPosition[pawn[0]], parseInt(pawn[1])];

  return (bishopX + pawnX === bishopY + pawnY) || (bishopX + bishopY === pawnX + pawnY)
}

console.log(bishopAndPawn('a1', 'c3'));
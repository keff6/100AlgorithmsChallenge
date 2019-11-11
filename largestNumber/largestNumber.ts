function largestNumber(n: number): number {
  return parseInt(Array(n).fill(9).join(''))
}

console.log(largestNumber(2));
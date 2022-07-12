function circleOfNumbers(n: number, firstNumber: number): number {
  const pos = (n / 2) + firstNumber
  return pos < (n-1) ? pos : pos - n
}

console.log(circleOfNumbers(10, 2));
function factorializeANumber(num: number): number {
  let total = 1
  for(let i = num; i >= 1; i--) {
    total *= i
  }
  return total
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
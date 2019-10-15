function candies(n: number, m: number): number {
  return Math.floor(m/n) * n;
}

console.log(candies(3, 10));
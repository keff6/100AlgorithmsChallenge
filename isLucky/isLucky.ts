function isLucky(n: number): boolean {
  const numString = n.toString()
  const halfLenght = numString.length / 2
  const firstHalf = numString.substr(0, halfLenght)
  const lastHalf = numString.substr(halfLenght)
  const firstHalfTotal = firstHalf.split('').map(Number).reduce((a,c) => a += c)
  const lastHalfTotal = lastHalf.split('').map(Number).reduce((a,c) => a += c)

  return firstHalfTotal === lastHalfTotal
}

console.log(isLucky(1230));
console.log(isLucky(239017));
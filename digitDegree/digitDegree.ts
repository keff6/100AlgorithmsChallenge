function digitDegree(n: number): number {
  let digits = n.toString().split('').map(Number)
  let degree = 1
 
  while(digits.length > 1) {
    digits = digits.reduce((acc, curr) => acc += +curr).toString().split('').map(Number)
    degree++
  }
  
  return degree
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
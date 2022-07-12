function addTwoDigits(n: any): number {
  const numArray = n.toString().split('').map(n => +n)
  const sum = numArray.reduce((curr, acum) => acum+=curr)
  return sum
}

// console.log(addTwoDigits(29));
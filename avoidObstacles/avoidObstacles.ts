function avoidObstacles(inputArray: number[]): number {
  inputArray.sort((a,b) => a - b)
  const len = inputArray[inputArray.length - 1];

  for(let i = 1; i <= len + 1; i++) {
    if(inputArray.every(val => val % i !== 0)) {
      return i
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
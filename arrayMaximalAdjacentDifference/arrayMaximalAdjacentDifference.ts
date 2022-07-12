function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDifference = 0
  for(let i = 0; i < inputArray.length - 1; i++){
    const currentDifference = Math.abs(inputArray[i] - inputArray[i+1])
    maxDifference = (currentDifference > maxDifference) ? currentDifference : maxDifference
  }
  return maxDifference
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
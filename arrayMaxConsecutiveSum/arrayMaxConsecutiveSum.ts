function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let maxSum = 0
  for(let i = 0; i <= inputArray.length - k; i++){
    const currentSum = sumArray(inputArray.slice(i,i+k))
    if(currentSum > maxSum) maxSum = currentSum
  }
  return maxSum
}

function sumArray(array: number[]): number{
  return array.reduce((acc, val) => acc += val)
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
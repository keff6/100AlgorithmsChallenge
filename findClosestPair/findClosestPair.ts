function findClosestPair(numbers: number[], sum: number): number {
  let distances = []
  let dictionary = {}
  
  for(let i = 0; i < numbers.length; i++) {
    if(dictionary[sum - numbers[i]]) {
      const difference  = i - dictionary[sum - numbers[i]]
      distances.push(difference)
    } else {
      dictionary[sum - numbers[i]] = i
    }
  }
  
  return distances[0]
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
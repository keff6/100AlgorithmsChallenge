function findClosestPair(numbers: number[], sum: number): number {
  const distances = []
  const dictionary = {}
    
  for(let i = 0; i < numbers.length; i++) {
    if(dictionary.hasOwnProperty(numbers[i])) {
      const difference  = i - dictionary[numbers[i]]
      distances.push(difference)
    } else {
      dictionary[sum - numbers[i]] = i
    }
  }
  
  return distances.length > 0 ? Math.min(...distances) : -1
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
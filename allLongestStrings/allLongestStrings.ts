function allLongestStrings(inputArray: string[]): string[] {
  const maxLength = Math.max(...inputArray.map(word => word.length));
  return inputArray.filter(word => word.length === maxLength);
}

// note: solution on the course use forEach, but the logic was the same:
// 1. Find max length 2. get all the words with that length
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
function almostIncreasingSequence(sequence: number[]): boolean {
  let lastIncreasing = sequence[0]
  let toRemoveCount = 0;

  for(let i = 1; i < sequence.length - 1; i++) {
    if(sequence[i] >= sequence[i+1] || lastIncreasing >= sequence[i]) {
      toRemoveCount++
      if(toRemoveCount > 1) return false
    } else {
      lastIncreasing = sequence[i]
    }
  }

  return true;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 
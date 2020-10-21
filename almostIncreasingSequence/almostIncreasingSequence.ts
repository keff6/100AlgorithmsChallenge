function almostIncreasingSequence(sequence: number[]): boolean {
  let prev = Number.NEGATIVE_INFINITY;
  let next = Number.POSITIVE_INFINITY;
  let notIncrement = 0;
  const len = sequence.length;
    
  for(let i = 0; i < len - 1; i++) {
    if(i + 2 < len){
      next = sequence[i+2];
    } else {
      next = Number.POSITIVE_INFINITY
    }

    if(sequence[i] < sequence[i+1])  {
      prev = sequence[i];
    } else {
      if(sequence[i] < next && sequence[i] > prev) {
        prev = sequence[i];
        notIncrement++;
      } else if(sequence[i + 1] < next && sequence[i+1] > prev){
         prev = sequence[i + 1];
         notIncrement++;
      } else {
        return false;
      }
    }

    if(notIncrement > 1) return false
  }

  return true;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 

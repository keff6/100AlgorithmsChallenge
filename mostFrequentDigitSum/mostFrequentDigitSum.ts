function mostFrequentDigitSum(n: number): number {
  const differences = {}
  
  while(n !== 0) {
    let sum = 0;
    let currentValue = n
    
    while (currentValue) {
      sum += currentValue % 10;
      currentValue = Math.floor(currentValue / 10);
    }
    
    if(differences.hasOwnProperty(sum)) {
      differences[sum]++
    } else {
      differences[sum] = 1
    }
    
    n = n - sum
  }

  return +Object.keys(differences).reduce((a, b) => differences[a] > differences[b] ? a : b)                   
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));


console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
function firstDuplicate(a: number[]): number {
  const currentNumbers = {}
  let i = 0;
  
  while(i < a.length) {
    if(currentNumbers.hasOwnProperty(a[i])) return a[i]
    else {
      currentNumbers[a[i]] = true
    }
    i++
  }
  
  return -1
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));

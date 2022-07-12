function containsDuplicates(a: number[]): boolean {
  a.sort((a,b) => a-b)
  
  for(let i = 1; i < a.length; i++) {
    if(a[i-1] === a[i]) return true
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

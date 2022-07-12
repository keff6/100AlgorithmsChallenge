function areSimilar(a: number[], b: number[]): boolean {
  if(a.toString() === b.toString()) return true;
  
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) {
      const index = b.indexOf(a[i])
      if(index === -1) {
        return false
      } else {
        let aux = a[i]
        a[i] = a[index]
        a[index] = aux
        return a.toString() === b.toString()
      }
    }
  }
  return false  
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));

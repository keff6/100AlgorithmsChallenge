function areSimilar(a, b) {
    if(a.toString() === b.toString()) return true;
    const diferentIndexes = [];
  
    for(let i =0; i < a.length; i++) {
      if(a[i] !== b[i]){
        diferentIndexes.push(i)
      }
    }
  
    if(diferentIndexes.length !== 2) return false;
    //swap
    let aux = b[diferentIndexes[0]]
    b[diferentIndexes[0]] = b[diferentIndexes[1]];
    b[diferentIndexes[1]] = aux;
    
  
    return a.toString() === b.toString();
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));

function fermactor(n: number): number[] {
  const dictionary = {};
  let d = 1;
  let c = 0;
  
  while(c === 0) {
    let currentSquare = Math.pow(d,2);
    let find = currentSquare + n
    
    if(dictionary[currentSquare]){
      c = dictionary[currentSquare]
    } else {
      dictionary[find] = d
      d++
    }
  }
  return [d, c]
}

console.log(fermactor(15));
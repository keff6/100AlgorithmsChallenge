function arrayConversion(inputArray: number[]): number {
  let current = [...inputArray]
  let isEven = true;
  
  while(current.length > 1) {
    const result = [];
    if(isEven) {
      for(let i = 0; i < current.length - 1; i = i+2) {
        result.push(current[i] + current[i+1])
      }
    } else {
      for(let i = 0; i < current.length - 1; i = i+2) {
        result.push(current[i] * current[i+1])
      }
    }
    
    current = result;
    isEven = !isEven;
  }
  return +current;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

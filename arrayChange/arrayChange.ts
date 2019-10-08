function arrayChange(inputArray: number[]): number {
  let movements = 0;
  for(let i = 1; i < inputArray.length; i++) {
    const prevValue = inputArray[i-1];
    const currentValue = inputArray[i];
    
    if(prevValue >= currentValue) {
      const newValue = prevValue + 1;
      inputArray[i] = newValue;
      movements += (newValue - currentValue);
    }
  }
  return movements;
}

console.log(arrayChange([1, 1, 1]));
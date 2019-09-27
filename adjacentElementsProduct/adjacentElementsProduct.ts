function adjacentElementsProduct(inputArray: number[]): number {
  let maxProd = inputArray[0] * inputArray[1];
  for( let i = 1; i< inputArray.length - 1; i++) {
    const currentProd = inputArray[i] * inputArray[i+1];
    if(currentProd > maxProd) maxProd = currentProd
  }
  return maxProd
}

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
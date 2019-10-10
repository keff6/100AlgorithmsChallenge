function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  return inputArray.map(val => val === elemToReplace ? substitutionElem : val);
}

console.log(arrayReplace([1, 2, 1], 1, 3));
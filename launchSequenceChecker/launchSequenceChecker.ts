function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
  const sequenceDictionary = {}
  
  for(let i = 0; i < systemNames.length; i++) {
    const currentValue = systemNames[i];
    if(!sequenceDictionary.hasOwnProperty(currentValue)) {
      sequenceDictionary[currentValue] = stepNumbers[i]
    } else {
      if(sequenceDictionary[currentValue] >= stepNumbers[i]) {
        return false
      }
      sequenceDictionary[currentValue] = stepNumbers[i]
    }
  }

  return true
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
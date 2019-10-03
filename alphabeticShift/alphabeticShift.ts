function alphabeticShift(inputString: string): string {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const result = [];
  
  for(let i = 0; i < inputString.length; i++) {
    const index = alphabetArray.indexOf(inputString[i])
    const newIndex = index === 25 ? 0 : index +  1
    result.push(alphabetArray[newIndex])
  }
  
  return result.join('')
}

console.log(alphabeticShift('crazy'));
function longestDigitsPrefix(inputString: string): string {
  let result = []
  const inputArr = inputString.split('');
  
  for(let char of inputArr){
    if(Number(char)) {
      result.push(char)
    } else {
      break;
    }
  }
  
  return result.join('')
}

console.log(longestDigitsPrefix('123aa1'));
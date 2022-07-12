function integerToStringOfFixedWidth(number: number, width: number): string {
  const strNumber = number.toString()
  const strNumberLen = strNumber.length

  if(strNumberLen > width) {
    return strNumber.substring(strNumberLen - width)
  } 
  if(strNumberLen < width) {
    const zeros = new Array(width - strNumberLen).fill(0);
    return zeros.concat(strNumber).join('')
  }
  
  return strNumber
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

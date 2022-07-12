function firstDigit(inputString: string): string {
  const digitsArray = inputString.split('').filter(n => !isNaN(+n));
  return digitsArray.length > 0 ? digitsArray[0] : 'There are no digits'
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));

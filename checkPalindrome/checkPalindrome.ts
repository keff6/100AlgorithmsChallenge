function checkPalindrome(inputString: string): boolean {
  const inverse = inputString.split('').reverse().join('').toLowerCase()
  return inputString.toLowerCase() === inverse;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

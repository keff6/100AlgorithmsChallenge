function isCaseInsensitivePalindrome(inputString: string): boolean {
  const lowercaseString = inputString.toLowerCase();
  const invertedString = lowercaseString.split('').reverse().join('');
  return lowercaseString === invertedString;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
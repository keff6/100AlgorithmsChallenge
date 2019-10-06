function alphabetSubsequence(s: string): boolean {
  const lowerString = s.toLowerCase();  
  if(new Set(lowerString).size !== lowerString.length) return false;
  let currentCharCode = lowerString.charCodeAt(0);
  
  for(let i = 1; i < lowerString.length; i++){
    if(currentCharCode >= lowerString.charCodeAt(i)) return false;
    currentCharCode = lowerString.charCodeAt(i);
  }
  
  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))

function firstNotRepeatingCharacter(s: string): string {
  const dict = {}
  
  for(let i = 0; i < s.length; i++) {
    const currenChar = s[i];
    
    if(dict[currenChar]) {
      dict[currenChar] = -1
    } else {
      dict[currenChar] = i
    }
  }
  
  const minIndex = Object.values(dict).filter(v => v !== -1)[0]
  
  return s[minIndex] || '_'
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));

// Search for a more optimal solution

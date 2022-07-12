function commonCharacterCount(s1: string, s2: string): number {
  let count = 0;
  const s2Array = s2.split('')
  
  for(let i = 0; i < s1.length; i++) {
    const findIndex = s2Array.indexOf(s1[i]);
    if(findIndex !== -1) {
      s2Array.splice(findIndex, 1)
      count++
    }
  }
  
  return count
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
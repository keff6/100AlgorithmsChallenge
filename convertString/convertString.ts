function convertString(s: string, t: string): boolean {
  let lookupIndex = 0;
  let lookup = t[lookupIndex];
  
  for(let i = 0; i < s.length; i++) {
    if(s[i] === lookup) {
      lookupIndex++;
      if(lookupIndex === t.length) return true
      lookup = t[lookupIndex];
    }
  }
  
  return false
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));

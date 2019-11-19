function missingLetters(str: string): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const strArray = str.split('')
  const startRange = letters.indexOf(strArray[0])
  
  for(let i = startRange, j = 0; j < strArray.length; i++, j++) {
    if(letters[i] !== strArray[j]) {
      return letters[i]
    }
  }

  return undefined
}

// O(n) worst case

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));

/**
Python

def missingLetters(str):
  letters = 'abcdefghijklmnopqrstuvwxyz'
  startRange = letters.index(str[0])
  
  for j, chars in enumerate(str):
    if letters[startRange] != str[j]:
      return letters[startRange]
    else:
      startRange += 1
  
  return None

print(missingLetters("bce"))
print(missingLetters("abce"));
print(missingLetters("abcdefghjklmno"));
print(missingLetters("abcdefghijklmnopqrstuvwxyz"));

 */
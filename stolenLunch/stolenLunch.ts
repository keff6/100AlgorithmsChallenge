function stolenLunch(note: string): string {
  const charCodes = {
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j',
    a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9
  }
  
  return note.split('').map(c => charCodes.hasOwnProperty(c) ? charCodes[c] : c).join('')
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));

/*
python
def stolenLunch(note):
  charCodes = {
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9
  }
  
  deciphered = list(map(lambda c: str(charCodes[c]) if c in charCodes else c, note))
  return ''.join(deciphered)


print(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));

*/
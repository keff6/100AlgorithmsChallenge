function reflectString(inputString: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let reflexedString = ''
  
  for(let i = 0; i < inputString.length; i++) {
    const reflectIndex = alphabet.indexOf(inputString[i].toLowerCase()) + 1
    reflexedString += alphabet.substr(-reflectIndex,1)
  }
  
  return reflexedString
}

console.log(reflectString("name"));

/*
python

def reflectString(inputString):
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  reflexedString = ''
  
  for char in inputString:
    reflectIndex = alphabet.index(char.lower()) + 1
    reflexedString += alphabet[-reflectIndex]
  
  return reflexedString


print(reflectString("name"));
*/
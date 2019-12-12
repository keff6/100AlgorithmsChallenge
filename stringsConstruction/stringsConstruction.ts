function stringsConstruction(a: string, b: string): number {
  const lettersNeeded = getDictionaryFromWord(a)
  const lettersAvailable = getDictionaryFromWord(b)
  const countChar = []
  
  for (let [key, value] of Object.entries(lettersNeeded)) {
    if(lettersAvailable.hasOwnProperty(key)) {
      countChar.push(Math.floor(lettersAvailable[key] / value))
    } else {
      return 0
    }
  }
  
  return Math.min(...countChar)
}

function getDictionaryFromWord(word: string): object {
  const dictionary = {}
  
  for(let char of word){
    if(dictionary.hasOwnProperty(char)) {
      dictionary[char] ++
    } else {
      dictionary[char] = 1
    }
  }
  
  return dictionary
}

console.log(stringsConstruction('abc', 'abccba'));

/*
python

def stringsConstruction(a, b):
  lettersNeeded = getDictionaryFromWord(a)
  lettersAvailable = getDictionaryFromWord(b)
  countChar = []
  
  for key in lettersNeeded:
    if(key in lettersAvailable):
      countChar.append(round(lettersAvailable[key] / lettersNeeded[key]))
    else:
      return 0
  
  return min(countChar)

def getDictionaryFromWord(word):
  dictionary = {}
  
  for char in word:
    if(char in dictionary):
      dictionary[char] += 1
    else:
      dictionary[char] = 1
  
  return dictionary

print(stringsConstruction('abc', 'abccbadabcc'));

*/
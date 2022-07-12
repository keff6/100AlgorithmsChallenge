function palindromeRearranging(inputString: string): boolean {
  const letterCount = {}
  const lowercaseStr = inputString.toLowerCase()
  let oddCount = 0
  
  for(let i = 0; i < lowercaseStr.length; i++) {
    if(lowercaseStr[i] === ' ') continue
    if(letterCount.hasOwnProperty(lowercaseStr[i])) {
      delete letterCount[lowercaseStr[i]]
      oddCount--
    } else {
      letterCount[lowercaseStr[i]] = 1
      oddCount++
    }
  }
  
  return oddCount > 1 ? false : true
}

// O(n)

console.log(palindromeRearranging('aabb'));

/*
python

def palindromeRearranging(inputString):
  letterCount = {}
  lowercaseStr = inputString.lower()
  oddCount = 0
  
  for char in lowercaseStr:
    if char == ' ':
      continue

    if char in letterCount:
      del letterCount[char]
      oddCount -= 1
    else:
      letterCount[char] = 1
      oddCount += 1

  return False if oddCount > 1  else True


print(palindromeRearranging('aabb'));

*/
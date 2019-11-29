function reverseAString(str: string): string {
  const reversed = []
  const strArr = str.split('')
  
  while(strArr.length > 0) {
    reversed.push(strArr.pop())
  }
  return reversed.join('') 
  // Optional solution:
  // return str.split('').reverse().join('')
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));

/*
python

def reverseAString(str):
  reversed = ''
  
  for i in range(len(str) - 1, -1, -1):
    reversed += str[i]

  return reversed

  # optional
  # return str[::-1]

print(reverseAString('hello'));
print(reverseAString('Howdy'));
*/
function squareDigitsSequence(a0: number): number {
  const values = {}
  let currentValue = a0
  let sequenceLen = 1
  
  while(!values.hasOwnProperty(currentValue)) {
    values[currentValue] = true
    sequenceLen++
    
    const digits = currentValue.toString().split('').map(Number)
    currentValue = digits.reduce((acc, curr) => acc + (curr * curr),0)
  }
  
  return sequenceLen
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));

/*
python

from functools import reduce

def squareDigitsSequence(a0):
  values = {}
  currentValue = a0
  sequenceLen = 1
  
  while currentValue not in values.keys():
    values[currentValue] = True
    sequenceLen += 1
    digits = [int(d) for d in str(currentValue)]
    currentValue = reduce(lambda x,y: x**2 + y**2, digits)

  return sequenceLen

print(squareDigitsSequence(16));
print(squareDigitsSequence(103));

*/
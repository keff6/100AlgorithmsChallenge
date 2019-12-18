function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const aDictionary = {}
  
  for(let n of a) {
    if(!aDictionary.hasOwnProperty(n)) {
      aDictionary[n] = true
    }
  }
  
  for(let m of b) {
    const look = v - m
    if(aDictionary.hasOwnProperty(look)) {
      return true
    }
  }
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));

/*
Python

def sumOfTwo(a, b, v):
  aDictionary = {}
  
  for n in a:
    if n not in aDictionary:
      aDictionary[n] = True
  
  for m in b:
    look = v - m
    if look in aDictionary:
      return True
  
  return False

print(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
*/
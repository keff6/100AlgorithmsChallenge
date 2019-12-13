function sumAllPrimes(num: number): number {
  let primesSum = 0
  
  for(let i = 2; i <= num; i++) {
    let prime = true
    for(let j = 2; j < i; j++) {
      if(i % j === 0) {
        prime = false
        break
      }
    }
    if(prime){
      primesSum += i
    }
  }
  
  return primesSum
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));

/*
python

def sumAllPrimes(num):
  primesSum = 0
  
  for i in range(2, num + 1):
    prime = True
    for j in range(2, i):
      if(i % j == 0):
        prime = False
        break

    if(prime):
      primesSum += i

  return primesSum


print(sumAllPrimes(10))
print(sumAllPrimes(977))
*/
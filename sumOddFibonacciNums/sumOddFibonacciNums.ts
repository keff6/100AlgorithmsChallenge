function sumOddFibonacciNums(num: number): number {
  let total = 0;
  let previous = 0;
  let current = 1;
  
  while(current <= num) {
    if(current % 2 !== 0) {
      total += current
    }
    const aux = current
    current = previous + current
    previous = aux
  }
  
  return total
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));

/*
python

def sumOddFibonacciNums(num):
  total = 0
  previous = 0
  current = 1
  
  while(current <= num):
    if(current % 2 != 0):
      total += current

    aux = current
    current = previous + current
    previous = aux
  
  return total

print(sumOddFibonacciNums(1000));
print(sumOddFibonacciNums(4000000));
print(sumOddFibonacciNums(10));
*/

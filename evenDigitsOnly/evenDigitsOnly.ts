function evenDigitsOnly(n: number): boolean {
  while(n > 0) {
    const digit = n % 10
    if(digit % 2 !== 0) return false
    n = Math.trunc(n /10)
  }
  return true

  /*
  Option B
  const notEven = n.toString().split('').map(Number).filter(val => val % 2 !== 0)
  return notEven.length > 0
  */
}

// Big O:  O(log n)

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
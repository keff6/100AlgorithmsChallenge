function maxMultiple(divisor: number, bound: number): number  {
  return bound - (bound % divisor)
}

console.log(maxMultiple(3,10));

/**
Phyton

def maxMultiple(divisor, bound):
  return  bound - (bound % divisor)


print(maxMultiple(3,14));
 */
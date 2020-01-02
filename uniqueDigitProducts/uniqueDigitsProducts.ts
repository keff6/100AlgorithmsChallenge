function uniqueDigitProducts(a: number[]): number {
  const productsArray = a.map(i => product(i.toString().split('').map(Number)))
  const differentValues = new Set(productsArray)
  return differentValues.size
}

function product(arr: number[]): number {
  return arr.reduce((acc, curr) => acc *= curr)
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));

/*
python

from functools import reduce

def uniqueDigitProducts(a):
  digitsArray = list(map(lambda n: [int(d) for d in str(n)], a))
  productsArray = list(map(lambda x: product(x), digitsArray))
  differentValues = set(productsArray)
  return len(list(differentValues))


def product(arr):
  return reduce(lambda acc,curr: acc * curr, arr)


print(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));

*/
function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(num => !arr2.includes(num))
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));

/*
python
def seekAndDestroy(arr1, arr2):
  return list(filter(lambda x: x not in arr2, arr1))

print(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
print(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
*/

function sortByHeight(a: number[]): number[] {
  const peopleHeights = a.filter(p => p !== -1)
  peopleHeights.sort((a,b) => a - b)
  const inOrder = a.map(item => item !== -1 ? peopleHeights.shift() : item) 
  
  return a
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

/*
python

def sortByHeight(a):
  peopleHeights = list(filter(lambda p: p != -1, a))
  peopleHeights.sort()
  inOrder = list(map(lambda item: peopleHeights.pop(0) if item != -1 else item, a))
  
  return inOrder

print(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
*/
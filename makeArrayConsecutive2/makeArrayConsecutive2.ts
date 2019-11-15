function makeArrayConsecutive2(statues: number[]): number {
  let count = 0
  statues.sort((a, b) => a - b)
  let min = statues[0]
  let max = statues[statues.length - 1]
  
  for(let i = min; i <= max; i++) {
    if(!statues.includes(i)) count++
  }
  
  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));

/*

Python solution

def makeArrayConsecutive2(statues):
  statues.sort()
  min = statues[0]
  max = statues[len(statues) - 1]
  count = 0

  while min <= max:
    if min not in statues:
      count += 1
    min += 1

  return count
*/
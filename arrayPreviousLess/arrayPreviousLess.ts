function arrayPreviousLess(items: number[]): number[] {
  let prevValue = null;
  for(let i = 0; i < items.length; i++) {
    const currentValue = items[i];
    if(prevValue && (prevValue < currentValue)) {
      items[i] = prevValue;
    } else {
      items[i] = -1;
    }
    prevValue = currentValue
  }
  return items;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
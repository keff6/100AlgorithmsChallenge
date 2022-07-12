function shapeArea(n: number): number {
  // my solution
  if(n === 1) {
    return 1
  }
  else {
    return shapeArea(n -1) + (n * 2 + ((n - 2) * 2))
  }
  /*
  best solution

  let area = 1

  for(let i = 1; i< n; i++){
    area += 4 * i
  }

  return area
  */
}

console.log(shapeArea(2));
console.log(shapeArea(3));
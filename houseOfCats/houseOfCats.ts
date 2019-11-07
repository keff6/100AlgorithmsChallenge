function houseOfCats(legs: number): number[] {
  const result = [];
  
  while(legs >= 2) {
    const persons = Math.floor(legs / 2)
    result.unshift(persons)
    legs -= 4
  }
  
  return result;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));

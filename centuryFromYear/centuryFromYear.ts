function centuryFromYear(year: number): number {
  const century = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1
  return century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
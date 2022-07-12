function lateRide(n: number): number {
  const hours = Math.floor(n / 60).toString().split('')
  const mins = (n % 60).toString().split('')
  const digitsArray = Array(...hours, ...mins).map(Number)
                      
  return digitsArray.reduce((a,c) => a+=c)
}

console.log(lateRide(240));
console.log(lateRide(808));

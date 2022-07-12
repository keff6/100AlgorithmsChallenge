function fancyRide(l: number, fares: number[]): string {
  const uberType = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']
  let index = fares.length - 1;
  
  for(let i = index; i >=0; i--){
    if(l * fares[i] <= 20){
      index = i
      break
    }
  }
  
  return uberType[index]
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
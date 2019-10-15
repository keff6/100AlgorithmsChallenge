function boxBlur(image: number[][]): number[][] {
const widthLen = image[0].length - 3
  const heightLen = image.length - 3
  const result = []
  
  for(let i=0; i <= widthLen; i++) {
    const currentPixel = []
    
    
    for(let j = 0; j <= heightLen; j++) {
      const currentMatrix = image.slice(j,j+3).map(line => line.slice(j,j+3))
    
    console.log(currentMatrix)
      
     const valuesFromMatrix = []
     currentMatrix.forEach(val => valuesFromMatrix.push(...val))
     const pixel = Math.floor(valuesFromMatrix.reduce((acum, curr) => acum += curr) / 9)
     currentPixel.push(pixel)
    }
    result.push(currentPixel)
  }
  
  return result
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));
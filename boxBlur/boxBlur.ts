function boxBlur(image: number[][]): number[][] {
  const widthLen = image[0].length - 3;
  const heightLen = image.length - 3;
  const result = [];
  
  for(let i=0; i <= widthLen; i++) {
    const currentPixelLine = [];
    
    for(let j = 0; j <= heightLen; j++) {
      const currentMatrix = image.slice(i,i+3).map(line => line.slice(j,j+3));
      const pixel = getPixel(currentMatrix);
      currentPixelLine.push(pixel);
    }
    result.push(currentPixelLine);
  }
  
  return result;
}

function getPixel(matrix) {
  const valuesFromMatrix = [];
  matrix.forEach(val => valuesFromMatrix.push(...val));
  return Math.floor(valuesFromMatrix.reduce((acum, curr) => acum += curr) / 9);
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));
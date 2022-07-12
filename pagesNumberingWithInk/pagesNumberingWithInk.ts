function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
  const currentDigits = current.toString().length
  let lastPrinted = current
  
  while(numberOfDigits > 0){
    const currentDigits = current.toString().length
    numberOfDigits -= currentDigits
    if(numberOfDigits >= 0){
      lastPrinted = current
    }
    current++
    
  }
  
  return lastPrinted
}

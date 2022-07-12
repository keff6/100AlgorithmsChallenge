function isTandemRepeat(inputString: string): boolean {
  const len = inputString.length;
  if(len % 2 === 0) {
    const firstHalf = inputString.substr(0, inputString.length / 2)
    const secondHalf = inputString.substr(inputString.length / 2)
  
    return firstHalf === secondHalf
  }
  return false
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))

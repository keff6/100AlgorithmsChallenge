function htmlEndTagByStartTag(startTag: string): string {
  const starTagArray = startTag.split('')
  const lessThanSymbol = starTagArray.shift()
  const graterThanSymbol = starTagArray.pop();
  const tagName = starTagArray.join('').split(' ')[0]
  
  return `${lessThanSymbol}/${tagName}${graterThanSymbol}`
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))
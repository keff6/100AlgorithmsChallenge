function pigLatin(str: string): string {
  const vowels = 'aeiou'
  const sufix = []
  
  if(str.length > 0 && vowels.includes(str[0])) {
    return str.concat('way')
  }

  let splitIndex = 0
  for(let i =0 ; i< str.length; i++) {
    if(vowels.includes(str[i])) {
      splitIndex = i
      break
    } else {
      sufix.push(str[i])
    }
  }
  
  return str.substr(splitIndex).concat(sufix.join('').concat('ay'))
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));

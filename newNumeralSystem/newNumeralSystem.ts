function newNumeralSystem(number: string): string[] {
  const alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let index = alphabeth.indexOf(number.toUpperCase())
  const result = []
  
  if(index !== -1) {
    const half = Math.floor(index / 2)
    let complement = 0
    
    while(index > half) {
      const currentStr = `${alphabeth[complement]} + ${alphabeth[index]}`
      result.push(currentStr)
      complement++
      index--
    }
  }

  return result
}   

console.log(newNumeralSystem('G'));

/**
 * Python
def newNumeralSystem(number):
  alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  index = alphabeth.find(number.upper())
  result = []
  
  if index != -1:
    half = round(index / 2, 0)
    complement = 0
    
    while complement <= half:
      currentStr = f'{alphabeth[complement]} + {alphabeth[index]}'
      result.append(currentStr)
      complement += 1
      index -= 1

  return result

print(newNumeralSystem('I'));
 */
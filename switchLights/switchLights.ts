function switchLights(a: number[]): number[] {
  let switchesLeft = a.filter(x => x === 1).length
  const inversor = { '1': 0, '0': 1}
  const result = []
  
  for(let i = 0; i < a.length; i++) {
    const currentState = (switchesLeft % 2 === 0) ? a[i] : inversor[a[i]]
    result.push(currentState)

    if(a[i] === 1) {
      switchesLeft--
    }
  }

  return result
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));

/*
Python

def switchLights(a):
  switchesLeft = len(list(filter(lambda x: x == 1, a)))
  inversor = { 1: 0, 0: 1}
  result = []
  
  for i in a:
    currentState = i if (switchesLeft % 2 == 0) else inversor[i]
    result.append(currentState)

    if i == 1:
      switchesLeft -= 1


  return result


print(switchLights([1, 1, 1, 1, 1]));
print(switchLights([0, 0]));
*/

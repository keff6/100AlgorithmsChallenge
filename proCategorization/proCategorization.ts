function proCategorization(pros: string[], preferences: string[][]): string[][][] {
  const prosByPreference = {}
  const result = []
  
  for(let i = 0; i < preferences.length; i++) {
    for(let j = 0; j < preferences[i].length; j++) {
      if(prosByPreference.hasOwnProperty(preferences[i][j])) {
        prosByPreference[preferences[i][j]].push(i)
      } else {
        prosByPreference[preferences[i][j]] = [i]
      }
    }
  }
  
  const keys = Object.keys(prosByPreference)
  for(let key of keys) {
    const localPros = prosByPreference[key].map(i => pros[i])
    result.push([[key], localPros])
  }
  result.sort()

  return result
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));

/*
python

def proCategorization(pros, preferences):
  prosByPreference = {}
  result = []
  
  for i, set in enumerate(preferences):
    for j in set:
      if j in prosByPreference:
        prosByPreference[j].append(i)
      else:
        prosByPreference[j] = [i]

  
  keys = prosByPreference.keys()
  for key in keys:
    localPros = list(map(lambda i: pros[i], prosByPreference[key]))
    result.append([[key], localPros])

  result.sort()
  
  return result


print(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));
*/
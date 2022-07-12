function properNounCorrection(noun: string): string {
  return noun[0]
          .toUpperCase()
          .concat(noun.substr(1).toLowerCase())
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));

/*
python

def properNounCorrection(noun):
  return noun[0].upper() + noun[1:].lower()


print(properNounCorrection('pARiS'));
print(properNounCorrection('John'));
*/
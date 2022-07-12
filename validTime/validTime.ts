function validTime(time: string): boolean {
  const [hours, seconds] = time.split(':').map(Number)
  return (hours < 24 && hours > 0) && (seconds < 60 && seconds > 0)
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));

/*
python

def validTime(time):
  [hours, seconds] = list(map(lambda n: int(n),time.split(':')))
  return (hours < 24 and hours > 0) and (seconds < 60 and seconds > 0)

print(validTime('13:58'));
print(validTime('25:51'));
print(validTime('02:76'));


*/

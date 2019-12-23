function tasksTypes(deadlines: number[], day: number): number[] {
  const upcomingTop = day + 7
  let [today, upcoming, later] = [0, 0, 0];
  
  for(let i = 0; i < deadlines.length; i++) {
    const current = deadlines[i]
    if(current <= day) {
      today++
    } else if(current > day && current <= upcomingTop) {
      upcoming++
    } else {
      later++
    }
  }

  return [today, upcoming, later]
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

/*
Python

def tasksTypes(deadlines, day):
  upcomingTop = day + 7
  [today, upcoming, later] = [0, 0, 0];
  
  for current in deadlines:
    if current <= day:
      today += 1
    elif current > day and current <= upcomingTop:
      upcoming += 1
    else:
      later += 1

  return [today, upcoming, later]


print(tasksTypes([1, 2, 3, 4, 5], 2));
print(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

*/

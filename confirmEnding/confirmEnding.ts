function confirmEnding(str: string, target: string) {
  return str.substr(str.length - target.length) === target
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
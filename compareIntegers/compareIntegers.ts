function compareIntegers(a: string, b: string): string {
  return +a === +b ? 'equals' : +a > +b ? 'greater' : 'lesser';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
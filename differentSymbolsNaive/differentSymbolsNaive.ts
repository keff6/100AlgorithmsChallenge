function differentSymbolsNaive(s: string): number {
  return new Set(s).size
}

console.log(differentSymbolsNaive('cabca'));

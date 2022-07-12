function findEmailDomain(address: string): string {
  const domainStartIndex = address.lastIndexOf('@') + 1
  return address.substr(domainStartIndex)
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));

function domainType(domains: string[]): string[] {
  const result = []
  const types = {
    org: 'organization',
    com: 'comercial',
    net: 'network',
    info: 'information',
  }
  
  domains.forEach(domain => {
    const ind = domain.lastIndexOf('.') + 1
    result.push(types[domain.substr(ind)])
  })
  
  return result
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
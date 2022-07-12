function electionsWinners(votes: number[], k: number): number {
  const currantMax = Math.max(...votes)
  const sortedResults = votes.map(v => v + k).sort((a,b) => b - a).filter(n => n > currantMax)
  
  if(sortedResults.length === 1) return 1
  
  if(sortedResults[0] === sortedResults[1]) return 0
  
  return sortedResults.length
}

console.log(electionsWinners([2, 3, 5, 2], 3));
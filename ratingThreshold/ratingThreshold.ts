function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  const averages = ratings.map(pro => (pro.reduce((acc, curr) => acc += curr) / pro.length))
  const belowThreshold = averages.reduce((acc, curr, index) => {
    if(curr < threshold) {
      acc.push(index)
    }
    
    return acc
  },[])
  
  return belowThreshold
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));

/*python

def ratingThreshold(threshold, ratings):
  result = []

  for i,rating in enumerate(ratings):
    if (sum(rating) / len(rating)) < threshold:
      result.append(i)

  return result
*/
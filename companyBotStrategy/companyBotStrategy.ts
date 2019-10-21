function companyBotStrategy(trainingData: number[][]): number {
  let correctAnswers = 0;
  let totalTime = 0;
  
  for(let i = 0; i < trainingData.length; i++){
    if(trainingData[i][1] === 1) {
      totalTime += trainingData[i][0]
      correctAnswers++
    }
  }
  
  return totalTime / correctAnswers || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));

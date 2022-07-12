function minimalNumberOfCoins(coins: number[], price: number): number {
  let coinsCount = 0;
  let index = coins.length - 1
  
  while(price !== 0 || index < 0) {
    coinsCount += Math.floor(price / coins[index])
    price = price % coins[index]
    index--
  }
  
  return coinsCount
}

// O(n)

console.log(minimalNumberOfCoins([1, 2, 10], 28));

/**
 * Python
import math

def minimalNumberOfCoins(coins, price):
  coinsCount = 0
  index = len(coins) - 1
  
  while price != 0 or index < 0:
    coinsCount += math.floor(price / coins[index])
    price = price % coins[index]
    index -= 1
  
  return coinsCount

print(minimalNumberOfCoins([1, 2, 10], 28))
 */
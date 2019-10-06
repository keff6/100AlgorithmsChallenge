function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const [yourStrength, friendStrenght] = [yourLeft + yourRight, friendsLeft + friendsRight];
  if(yourStrength !== friendStrenght) return false
  
  const yourStronger = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendStronger = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return (friendStronger === yourStronger) && (yourStrength === friendStrenght)
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))

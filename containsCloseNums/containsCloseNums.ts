function containsCloseNums(nums: number[], k: number): boolean {
  for(let i=0;i<nums.length - k;i++){
    if(nums[i] === nums[i+k]) return true
  }
  return false
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
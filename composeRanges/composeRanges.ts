function composeRanges(nums: number[]): string[] {
  let start = nums[0]
  let end = nums[0]
  const result = [];
  
  for(let i = 1; i < nums.length; i++) {
    if(end !== nums[i] - 1) {
      const range = start === end ? `${end}` : `${start}->${end}`;
      result.push(range)
      start = nums[i];
    }
    end = nums[i];
  }
  const range = start === end ? `${end}` : `${start}->${end}`;
  result.push(range)
  
  return result;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
function flattenArray(arr: any[]): any[] {
  const result = [];
  
  flatten(arr)
  
  function flatten(a) {
    a.forEach(val => {
      if(Array.isArray(val)) {
        flatten(val)
      } else {
        result.push(val)
      }
    })
    
  }
  
  return result;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

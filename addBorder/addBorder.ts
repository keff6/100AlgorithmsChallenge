function addBorder(picture: string[]): string[] {
  const cover = '*'.repeat(picture[0].length + 2);
  const mark = picture.map(str => '*'.concat(str,'*'))
  mark.unshift(cover)
  mark.push(cover)
  return mark
}

// console.log(addBorder(["abc", "ded"]));
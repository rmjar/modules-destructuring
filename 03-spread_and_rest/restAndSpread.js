function findMaxAndMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  }
}


function printRanking([a, b, c, ...xxx]) {
  return `
    I miejsce: ${a}
    II miejsce: ${b}
    III miejsce: ${c}
    pozostali: ${xxx.join(' ')}
  `
}

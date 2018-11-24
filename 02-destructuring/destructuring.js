function blackFridayAlert({item, off = 10, hour = 24}) {
  return `${item} taniej o ${off}% do godziny ${hour}`
}


function getRanking([a, b, c]) {
  return `
    1: ${a}
    2: ${b}
    3: ${c}
  `
}


function getFilmRating({title, rating: {cast, music, script}}) {
  return `
    Oceny dla filmu ${title}:
    Obsada: ${cast}
    Muzyka: ${music}
    Scenariusz: ${script}
  `
}

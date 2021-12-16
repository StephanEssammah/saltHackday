import fetch from 'node-fetch'

export const fetchMovie = async (query, key) => {
  const data = await fetch(`https://www.omdbapi.com/?apiKey=${key}&t=${query}`)
  const parsedData = await data.json()
  const { Title, Year, Runtime, Poster, Plot, imdbRating } = parsedData
  const finishedObject = {
    title: Title,
    year: Year,
    length: Runtime,
    poster: Poster,
    description: Plot,
    year: Year,
    rating: imdbRating,
  }
  return finishedObject;
}


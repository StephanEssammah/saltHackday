import fetch from 'node-fetch'

export const fetchMovie = async (query, key) => {
  const data = await fetch(`https://www.omdbapi.com/?t=${query}${key}`)
  const parsedData = await data.json()
  const { Title, Year, Runtime, Poster, Plot } = parsedData
  const finishedObject = {
    title: Title,
    year: Year,
    length: Runtime,
    poster: Poster,
    description: Plot
  }
  return finishedObject;
}


import express, { query } from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import { popKey } from './api_keys/popApi.js'
import { queryKey } from './api_keys/queryApi.js'
import { fetchMovie } from './utils.js'
const app = express()
const port = 3001

app.use(cors())
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${popKey}&language=en-US&page=1` 

app.get('/movies', async (req, res) => {
  const data = await fetch(popularURL)
  const parsedData = await data.json()
  const titlesArray = parsedData.results.map(item => item.title)
  
  const movieArray = await Promise.all(titlesArray.map(title => fetchMovie(title, queryKey)))
  const filteredMovieArray = movieArray.filter(item => item.title !== undefined)
  res.json(filteredMovieArray)
})

app.get('/movie/:query', async (req, res) => {
  const movie = await fetchMovie(req.params.query, queryKey)
  console.log('FOUND: ', movie);
  res.json(movie);
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


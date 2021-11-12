import express, { json, query } from 'express'
import cors from 'cors'
import fetch from 'node-fetch'


import { popKey } from './api_keys/popApi.js'
import { queryKey } from './api_keys/queryApi.js'
import { fetchMovie } from './utils.js'
import { promises as fs } from 'fs';
const app = express()
const port = 3001


app.use(express.urlencoded({extended:true}));
app.use(express.json());
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

app.get('/movie/:title', async (req, res) => {
  const movie = await fetchMovie(req.params.title, queryKey)
  res.json(movie);
})

app.get('/favourites/:user', async (req, res) => {
  const { user } = req.params
  const doc = await fs.readFile(`./users/${user}.json`, 'utf-8')
  const parsed = JSON.parse(doc)
  res.json(parsed);
})

app.put('/favourites/:title', async (req, res) => { 
  const { user } = req.body
  const { title } = req.params
  const doc = await fs.readFile(`./users/${user}.json`, 'utf-8')
  const currentFavourites = JSON.parse(doc)
  const movie = await fetchMovie(title, queryKey)
  currentFavourites.push(movie);
  await fs.writeFile(`./users/${user}.json`, JSON.stringify(currentFavourites))
  res.send('favourite set');
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


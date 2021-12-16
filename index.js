import express, { json, query } from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()


import { fetchMovie } from './utils.js'
import { promises as fs } from 'fs';
const app = express()
const port = process.env.PORT || 3001;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

const queryKey = process.env.QUERY_KEY
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.POPULAR_KEY}&language=en-US&page=1` 


app.get('/movies', async (req, res) => {
  console.log('movies fetched')
  const data = await fetch(popularURL)
  const parsedData = await data.json()
  const titlesArray = parsedData.results.map(item => item.title)
  
  const movieArray = await Promise.all(titlesArray.map(title => fetchMovie(title, queryKey)))
  console.log(movieArray)
  const filteredMovieArray = movieArray.filter(item => item.title !== undefined && item.poster !== 'N/A')
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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


app.listen(port, () => console.log(`Server started on port ${port}`))


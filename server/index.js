import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import { popKey } from './api_keys/popApi.js'
const app = express()
const port = 3001

app.use(cors())
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${popKey}&language=en-US&page=1` 


app.get('/movies', async (req, res) => {
  const data = await fetch(popularURL)
  const parsedData = await data.json()
  const titlesArray = parsedData.results.map(item => item.title)
  res.json(titlesArray)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


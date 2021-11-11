const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())


app.get('/movies', (req, res) => {
  const movie = {
    title: 'avengers',
    description: 'something'
  }
  res.json(movie)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


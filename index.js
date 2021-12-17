require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT

console.log('============port===========')
console.log(port)
console.log('===========================')

app.get('/movies', (req, res) => {
  res.send('Movies!')
})

app.get('/tv-shows', (req, res) => {
  res.send('Tv Shows!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

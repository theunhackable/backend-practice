const express = require('express')

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.get('/json', (req, res) => {
  res.status(200).send({ message: 'Hello World!' })
})

app.get('/html', (req, res) => {
  res.status(200).send('<h1> Hello World </h1>')
})

app.get('*', (req, res) => {
  res.status(404).send({message: 'Not Found'});
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})
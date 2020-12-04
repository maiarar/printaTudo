const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Bem vinde ao PrintaTudo! Mande qualquer requisição pra localhost:${port}!`)
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  })

app.listen(port, () => {
  console.log(`Startado no http://localhost:${port}`)
})

module.exports = app
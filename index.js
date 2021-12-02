const express = require('express')
const axios = require('axios')
var parser = require('body-parser')

const app = express()
const port = 3000
 
// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
 
// parse application/json
app.use(parser.json())



app.get('/', async (req, res) => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
  res.send(data)
})



app.post('/', async (req, res) => {
  const {data} = await axios.post('https://jsonplaceholder.typicode.com/users/1/todos')
  res.send(data)
})

app.put('/:id', async (req, res) => {
  const {body} =req
  const {id} = req.params

  await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)
  res.sendStatus(204);

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
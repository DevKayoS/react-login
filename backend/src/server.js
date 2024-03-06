const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res)=>{
  res.send('hello world')
})

app.listen(3333, () => {
  console.log('👾 HTTP running on route http://localhost:3333')
})
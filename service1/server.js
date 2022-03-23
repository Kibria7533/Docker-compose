const express = require('express')
const cors=require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 8008
app.use(cors());
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
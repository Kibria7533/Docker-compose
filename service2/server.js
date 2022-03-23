const express = require('express')
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express()
const port = 8009

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
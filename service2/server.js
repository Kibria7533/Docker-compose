const express = require('express')
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express()
const port = 8009
//app1:5000
app.use(cors());
app.use(bodyParser.json());
app.post('/service2', (req, res) => {
  console.log(req);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
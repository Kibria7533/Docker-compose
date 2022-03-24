const express = require('express')
const bodyParser=require('body-parser');
const redis =require('redis');
const { createClient } = require('redis');
const cors=require('cors');
const app = express()
const port = 8009
//app1:5000
app.use(cors());
app.use(bodyParser.json());
app.post('/service2', (req, res) => {
 
  let sum=req.body.a+req.body.b;
  (async () => {
    const client = createClient();
  
    client.on('error', (err) => console.log('Redis Client Error', err));
  
    await client.connect();
  
    await client.set('result', sum);
    const value = await client.get('result');
    res.json({msg:'Wellcome you all',result:value});
  })();
})


app.get('/',(req,res)=>{
  res.send('Hell From Service 2 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
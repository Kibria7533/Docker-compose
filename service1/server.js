const express = require('express')
var http = require("http");
const cors=require('cors')
var querystring = require("querystring");
var bodyParser = require('body-parser')
const app = express()
const port = 8008
app.use(cors());
app.use(bodyParser.json())
app.get('/', (req, res) => {
  var data = querystring.stringify({
    username: "myname",
    password: " pass"
});

var options = {
    host: 'http://localhost',
    port: 8009,
    path: '/service2',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = http.request(options, function(res)
{
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("body: " + chunk);
    });
});
req.write(data);
req.end();
  // res.send('Hello World From Service 1!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
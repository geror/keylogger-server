const express = require('express')
const bodyParser = require('body-parser');
const app = express()  
const port = 3000

// app.use(bodyParser.json());	// support json encoded bodies
app.use(bodyParser.text());			// support text/plain encoded bodies

app.get('/', (req, res) => {
  res.send('Hello from Express!')
});

app.post('/', function(req, res){
    console.log('POST /');
    console.log('Body: ' + req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});
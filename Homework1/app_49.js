const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
   
  })

app.get('/', (req, res) => {
    // ...
   // res.send(JSON.stringify(req.body, null, 2));
});

app.listen(4000, () => console.log('start server'));
const express = require('express');
const app = express();


app.use(express.json());

app.get('/profile/:id', (req, res) => {
    console.log(req.body);
    res.json(req.body);
   
});

app.listen(4000, () => console.log('start server'));
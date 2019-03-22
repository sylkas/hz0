const express = require('express');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/costam/:id/:wi', (req, res) => {
    const {id, wi} = req.params;
    const p = req.path;
    const x = req.url;
    const m = req.method;
    res.send(id  + wi + p+ x+m);
});

server.post('/costam', (req, res) => {
    //const body = JSON.parse(req.body);
    const body = req.body;
    //res.json(body);
    res.send(body);
});

server.listen(4000, () => console.log('start server'));
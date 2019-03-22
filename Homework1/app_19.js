const express = require('express');
const app = express();

const customMiddleware = (req, res, next) => {
    //const url;
    console.log('Request URL:', req.originalUrl);
    console.log('Request type:', req.method);

    next();
};

app.use(customMiddleware);

app.get('/costam/:id?/:blog?', (req, res) => {
    console.log(req.params.id);
    console.log(req.params.blog);
    res.send('User info');
});

// server.get('/costam/:id/:wi', (req, res) => {
//     const {id, wi} = req.params;
//     const p = req.path;
//     const x = req.url;
//     const m = req.method;
//     res.send(id  + wi + p+ x+m);
// });

app.listen(4000, () => console.log('start server'));
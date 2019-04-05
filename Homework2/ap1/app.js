const express = require('express');
const app = express();

app.set('view engine', 'pug')
    app.get('/', function (req, res) {
        const scope = { title: 'some title', header: 'hello world!' };
        res.render('index', scope);
    });
    app.get('/Jan', function (req, res) {
        const scope = { title: 'some title', header: 'hello Jan!' };
        res.render('index', scope);
    });
    app.get('/Adam', function (req, res) {
        const scope = { title: 'some title', header: 'hello Adam!' };
        res.render('index', scope);
    });

app.listen(4000, () => console.log('start server'));
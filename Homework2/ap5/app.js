const express = require('express');
const app = express();

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.send('Get file');
});


app.get('/music.txt', async (req, res, next) => {
    const fileName = req.path;
    try {
        const data = await readFileAsync(`.${fileName}`)
        res.send(data);
    } catch (error) {
        next(error);
    }
});

app.get('/movies.txt', async (req, res, next) => {
    const fileName = req.path; 
    try {
        const data = await readFileAsync(`.${fileName}`)
        res.send(data);
    } catch (error) {
        next(error);
    }
});

app.get('/sample.txt', async (req, res, next) => {
    const fileName = req.path; 
    try {
        const data = await readFileAsync(`.${fileName}`)
        res.send(data);
    } catch (error) {
        next(error);
    }
}); 

app.use((error, req, res, next) => {
   console.log(error.message);
   //res.sendStatus(404);
    const scope = { title: 'Informacja', header: error.message };
    res.render('error.html', scope);
});

app.listen(4000, () => console.log('start server'));
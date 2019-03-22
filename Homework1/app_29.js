const express = require('express');
const app = express();
var router = express.Router();

const customMiddleware = (req, res, next) => {
    if(req.headers['access-token'] === 'alamakota'){
        next();
    } else {
        return res.sendStatus(401);
    }

};

app.use(customMiddleware);

app.get('/', (req, res) => {

    res.send('Hello User');
});

app.use('/admin', router, function (req, res) {
    res.sendStatus(401)
})
app.listen(4000, () => console.log('start server'));
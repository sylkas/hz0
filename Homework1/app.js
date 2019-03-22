const express = require('express');
const app = express();
const router = express.Router();

router.use((req,res,next) => {
    next();
});

router.get('/', (req,res) => {
    res.send('hello world');
});

app.use(router);
app.listen(4500);
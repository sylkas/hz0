const express = require('express');
const app = express();

const mul = (x, y) => {
    const result = x /y;
    return {result: result};
};


app.get('/mul/:a/:b', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    
    if (req.params.b === '0') {
        next('route');
    } else {
        next();
    }    
    // otherwise pass the control to the next middleware function in this stack
  }, function (req, res, next) {
    // send a regular response
    const {a,b} = req.params;
    res.send(mul(a,b))
  })
  
  // handler for the /user/:id path, which sends a special response
  app.get('/mul/:a/:b', function (req, res, next) {
    res.send('special')

    throw new Error('Div by 0 error');
  })
  app.use((error, req, res, next) => {
      console.log(error.message);
  })

app.listen(4000, () => console.log('start server'));
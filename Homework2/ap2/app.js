const express = require('express');
const app = express();

const mustacheExpress = require('mustache-express');

function calcTax(tax, amountWithTax) {
  const amountTax = amountWithTax * tax / 100;
  return {
      tax: tax,
      amountWithTax: amountWithTax,
      atax: amountTax,
      amount: amountWithTax - amountTax
  };
}

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


   app.get('/podatek/:tax/:amount', function (req, res) {
      const { tax, amount } = req.params;
      const scope = calcTax(tax, amount);
      //const scope = { title: 'some title', header: 'heloo!' };
      res.render('index.html', scope);
    });

app.listen(4000, () => console.log('start server'));
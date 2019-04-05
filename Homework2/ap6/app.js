const express = require('express');
const app = express();

const axios = require('axios');
const mustacheExpress = require('mustache-express');

async function getUser(id) {
  const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
  const { name, address: { geo: { lat, lng } } } = response.data;
  return { name, lat, lng };
}

async function getWeather(lat, lng) {
  const response = await axios(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`);
  return response.data;
}

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/user/:id', async (req, res, next) => {
  try {
      const userId = req.params.id;
      const user = await getUser(userId);
      //res.send(user.name);     
      const weather = await getWeather(user.lat, user.lng);
      const scope = { name: user.name, temp: weather.main.temp };
      res.render('index.html', scope);
  } catch (error) {
      next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error.message);
  //res.sendStatus(404);
  const scope = { error: error.message };
  res.render('error.html', scope);
});
app.listen(4000, () => console.log('start server'));
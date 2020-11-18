const express = require('express')
const path = require('path')
const fetch = require('node-fetch')

const app = express();


app.get('/api/v1/corsbypass', (req, res) => {
  sat_key = req.query.sat_key;
  user_lat = req.query.user_lat;
  user_long = req.query.user_long;
  passes = req.query.passes == true;

  console.log(`https://api.n2yo.com/rest/v1/satellite/${passes ? 'visualpasses' : 'positions'}/${sat_key}/${user_lat}/${user_long}/0/1/120/&apiKey=WXKLJR-AMJM8S-Y9GBGH-4L7F`);
  fetch(`https://api.n2yo.com/rest/v1/satellite/${passes ? 'visualpasses' : 'positions'}/${sat_key}/${user_lat}/${user_long}/0/1/${passes ? '120/' : ''}&apiKey=WXKLJR-AMJM8S-Y9GBGH-4L7F`)
  .catch(err => console.log(err))
  .then(r => r.json()).then(data => {
    console.log(data);
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
  });
});




const PORT = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/nedspage', (req, res) => res.render('pages/nedspage'))
app.get('/katiespage', (req, res) => res.render('pages/katiespage'))
app.get('/renitaspage', (req, res) => res.render('pages/renitaspage'))
app.get('/davidspage', (req, res) => res.render('pages/davidspage'))
app.get('/iss', (req, res) => res.render('pages/iss'))
app.get('/game', (req, res) => res.render('pages/game'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

console.log("test");

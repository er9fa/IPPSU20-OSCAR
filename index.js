const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/nedspage', (req, res) => res.render('pages/nedspage'))
  .get('/katiespage', (req, res) => res.render('pages/katiespage'))
  .get('/renitaspage', (req, res) => res.render('pages/renitaspage'))
  .get('/davidspage', (req, res) => res.render('pages/davidspage'))
  .get('/iss', (req, res) => res.render('pages/iss'))
  .get('/game', (req, res) => res.render('pages/game'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

console.log("test");

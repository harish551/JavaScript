var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.listen(8000)
app.get('/about', function (_req, res) {
  res.render('about')
})
app.get('/', function (req, res) {
  res.render('home')
})
app.get('*', function (req, res) {
  res.render('error')
})

// server.js
// where your node app starts

// Get port
const port = process.env.PORT || 4000

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// trust proxy
app.set('trust proxy', true);

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// My code here
app.get('/api/whoami', (req, res) => {
  let language = req.headers['accept-language']
  let software = req.headers['user-agent']
  console.log(req.headers)
  res.json({ipaddress: req.ip, language: language, software: software})
})

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
let express = require('express')
let request = require('request')
let querystring = require('querystring')
const sqlite3 = require('sqlite3');
let moment = require('moment');

let app = express()


let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8888/callback'

app.get('/login', function(_, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state',
      redirect_uri
    }))
})

app.get('/callback', function(req, res) {
  
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  //(error, response, body)
  request.post(authOptions, function(_, _, body) {
    let db = new sqlite3.Database('./db/main.db');
    let sql = 'INSERT OR REPLACE INTO security VALUES(?, ?, ?)';

    db.run(sql, [body.access_token, body.refresh_token, moment().format('YYYY-MM-DD hh:mm:ss')], (err) => {
      if(err) {
        return console.log(err);
      }

      console.log("Security info updated");
    });

    db.close();

    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token + '?refresh_token=' + body.refresh_token )
  })
})

app.post('/refresh', function(req, res) {
  //TODO
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'refresh_token'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(_, _, body) {
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
})


let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)
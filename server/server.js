import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import fallback from 'express-history-api-fallback';
//db
import db from './db.js';

var app = express();

const root = `public`;
app.use(express.static(root));
app.use(fallback('index.html', { root }));
//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization");
  next();
}); 

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
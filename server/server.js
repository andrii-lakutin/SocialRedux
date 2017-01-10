import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import fallback from 'express-history-api-fallback';
import sessions from 'client-sessions';
import bcrypt from 'bcryptjs';
import csrf from 'csurf';
//db
import db from './db.js';
import User from "./schemas/user";
//routes
import auth from './routes/auth';
import users from './routes/users';
import posts from './routes/posts';

import createError from './shared/createError';

var app = express();

const root = __dirname + '/../public';
app.use(express.static(root));
//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// }); 

app.use(sessions({
  cookieName: 'session',
  secret: 'SJKHs7876GKSnjkdskjd78436GG76dg387', //random string for cryptography
  duration: 30 * 60 * 1000,                     //after 30 min kick user
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true, //use cookies over https
  // ephemeral: true //delete cookie when the browser is closed
}));

app.use(function (req, res, next) {
  if (req.session && req.session.user) {
    User.findOne({ email: req.session.user.email }, function (err, user) {
      if (user) {
        req.user = user;
        req.user.password = "Secure";
        req.session.user = req.user;
      } 
      next();
    });
  } else {
    next();
  }
});

app.use('/auth', auth);
app.use('/users', users);
app.use('/posts', posts);
//FALLBACK MUST BE AT THE BOTTOM. Because we use another GET requests.
app.use(fallback('index.html', {root}));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
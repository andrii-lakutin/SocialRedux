import express from 'express';
import User from "../schemas/user";
import createError from '../shared/createError';
import bcrypt from 'bcryptjs';
import csrf from 'csurf';

let router = express.Router();

router.route('/register')
  .post(function (req, res) {
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    });
    user.save(function (err) {
      if (err) {
        var error = 'Something bad happened! Try again!';
        if (err.code === 11000) {
          error = 'That email is already taken, try another';
        }
        res.statusMessage = error;
        res.status(422).json(error);
      } else {
        res.status(200).json({ status: "Success!" });
      }
    });
  });

router.route('/login')
  .post(function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (!user) {
        createError("Invalid email", 401, res);
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = user;
          res.status(200).json({ status: "Success!" });
        } else {
          createError("Invalid password", 401, res);
        }
      }
    });
  });

router.route('/getCSRFToken')
  .get(function (req, res) {
    res.status(200).json({ csrfToken: req.csrfToken() });
  });

router.route('/logout')
  .get(function (req, res) {
    req.session.reset();
    res.status(200).json({ status: "Success!" });
  });

export default router;
import createError from './createError';

export default function requireLogin(req, res, next) {
  if (!req.user) {
    createError("You must login!", 401, res);
  } else {
    next();
  }
};
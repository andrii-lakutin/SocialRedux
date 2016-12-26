import express from 'express';
import User from "../schemas/user";
import createError from '../shared/createError';
import { requireLogin } from '../server';

let router = express.Router();

router.route('/personal')
    .get(requireLogin, function (req, res) {
        res.status(200).json({ status: "Success!", user: req.user });
    });

export default router;
import express from 'express';
import User from "../schemas/user";
import Post from "../schemas/post";
import PersonalPage from "../schemas/personal";
import createError from '../shared/createError';

let router = express.Router();

router.route('/user/:userId')
    .post(function (req, res) {
        let userId = req.params.userId;
        let post = new Post({
            date: prettyDate(),
            msg: req.body.msg,
            likes: 0,
            ownerId: userId,
            ownerNameAndLastName: req.body.fullName
        });

        console.log(userId);
        PersonalPage.findOneAndUpdate(
            { owner: userId },
            { $push: { posts: post } },
            { new: true },
            function (err, user) {
                if (err) {
                    console.log(err.message);
                    // createError("User not found!", 404, res);
                } else {
                    res.status(200).json({ status: "Success!", user });
                }
            });
    });

router.route('/user/:userId')
    .get(function (req, res) {
        let userId = req.params.userId;
        Post.find({ ownerId: userId }).exec(function (err, posts) {
            if (!posts) {
                createError("posts not found!", 404, res);
            } else {
                res.status(200).json({ status: "Success!", posts });
            }
        });
    });

function prettyDate() {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    let date = new Date();
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    let result = day + ' ' + monthNames[monthIndex] + ' ' + year;

    return result;
}

export default router;
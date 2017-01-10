import express from 'express';
import User from "../schemas/user";
import PersonalPage from "../schemas/personal";
import createError from '../shared/createError';
import requireLogin from '../shared/requireLogin';

let router = express.Router();

router.route('/personal')
    .get(requireLogin, function (req, res) {
        res.status(200).json({ status: "Success!", user: req.user });
    });

router.route('/personal/:userId')
    .get(function (req, res) {
        let userId = req.params.userId;
        PersonalPage.findOne({ owner: userId }, function (err, user) {
            if (!user) {
                createError("User not found!", 404, res);
            } else {
                res.status(200).json({ status: "Success!", user });
            }
        });
    });

router.route('/personal/:userId')
    .post(function (req, res) {
        let userId = req.params.userId;

        let dataForUpdate = {};
        dataForUpdate[req.body.field] = req.body.newValue;

        PersonalPage.findOneAndUpdate(
            { owner: userId },   
            { $set: dataForUpdate },
            { new: true },
            function (err, user) {
                if (err) {
                    createError("User not found!", 404, res);
                } else {
                    res.status(200).json({ status: "Success!", user });
                }
            });
    });

//         let userId = req.params.userId;
//         var personal = new PersonalPage({
//             firstName: "Dovakin",
//             lastName: "Dragonborn",
//             email: "fusrodah@gmail.com",
//             age: 223,
//             avatarUrl: "http://orig12.deviantart.net/d07d/f/2011/343/e/8/the_elder_scrolls_v__skyrim_icon_by_mohitg-d4int15.png",
//             headerUrl: "http://cdn.akamai.steamstatic.com/steam/apps/72850/header.jpg?t=1477612894",
//             friends: []
//         });
//         personal.save(function (err) {
//             if (err) {
//                 var error = 'Something bad happened! Try again!';
//                 res.statusMessage = error;
//                 res.status(422).json(error);
//             } else {
//                 res.status(200).json({ status: "Success!" });
//             }
//         });


export default router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            console.log('failed to register user: ', newUser, err);
            res.json({success: false, msg:'Failed to register user'});
        } else {
            console.log('registered user: ', user);
            res.json({success: true, msg:'User successfully registered'});
        }
    });
});

// Register
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email; // get username from form
    const password = req.body.password; // get password from form

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) { // no user found
            return res.json({success: false, message: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => { // compare the entered password to the user's password within db
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    }
                })
            } else { // if there's no match
                return res.json({success: false, message: 'Incorrect Password'});
            }
        })
    });
});

// Register
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
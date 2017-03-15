const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User successfully registered'});
        }
    });
});

// Register
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Register
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;
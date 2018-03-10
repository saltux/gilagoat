const express = require('express');
const router = new express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const config = require('../../config');
const db_url = process.env.MONGODB_URI || config.dbUri

mongoose.connect(db_url);

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

router.get('/test', function (req, res) {
    res.status(200).json({
        message: "You're authorized to see this secret message."
    });
});

// USER ROUTES
router.route('/users')
    .get(function (req, res) {
        User.find(function (err, users) {
            if (err)
                res.send(err);
            res.json(users)
        });
    })
    .post(function (req, res) {
        const user = new User();

        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.role = req.body.role;
        user.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'User successfully created' });
        });
    });


module.exports = router;






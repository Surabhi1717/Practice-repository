const express = require("express");
const router = express.Router();
const User = require('../models/userModel');

router.route("/create").post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User([
        email,
        password
    ])
    newUser.save();
})

module.exports = router;
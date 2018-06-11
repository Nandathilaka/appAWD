const express = require('express');
const router = express.Router();

router.get('/register',function (req,res) {
    res.send("Hello Register.!");
});

router.get('',function (req,res) {
    res.send("Hello Users.!");
});


module.exports = router;
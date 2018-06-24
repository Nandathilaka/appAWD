const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register',function (req,res) {
    const newUser = new User({

        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    });
    User.saveUser(newUser,function (err,user) {
        if(err){
            res.json({state:false,message:"Data not Inserted"})
        }
        if (user){
            res.json({state:true,message:"Data Inserted"})
        }
        
    })

});

router.get('',function (req,res) {
    res.send("Hello Users.!");
});


module.exports = router;
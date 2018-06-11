const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const user = require('./routes/users');

app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);

app.get('/',function (req,res) {
    res.send("Hello World");
});

app.listen(port,function () {
    console.log("Listening "+ port);
});
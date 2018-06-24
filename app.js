const express = require('express');     //express install
const path = require("path");           //path set
const mongoose = require('mongoose');   //mongoose install
const bodyParser = require('body-parser');
const app = express();                  //run express
const port = process.env.PORT || 3000;  //server port

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const config = require('./config/database'); //require to config file for database connection
const user = require('./routes/users'); // user route set

const connection = mongoose.connect(config.database);  //set database connection
if(connection){
    console.log("Database connected");
}else {
    console.log("database not connected");
 }

app.use(express.static(path.join(__dirname,"public")));  //set my static file in public folder.CSS,HTML..etc

app.use('/user',user);                   //rout to user

app.get('/',function (req,res) {         //root
    res.send("Hello World");
});

app.listen(port,function () {           //running port
    console.log("Listening "+ port);
});
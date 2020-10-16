//save express and cors in variables
var express = require("express");
var cors = require("cors");
//initializing express-server
var app = express();
app.use(cors());
//requiring users from module "classes"
const userArray = require("./model/classes");

//make sure port 3000 is available
const PORT = process.env.PORT || 3000;

//activate server
app.listen(PORT, ()=>{
    console.log("listening at port " + PORT);
})

//my CRUD-endpoints for user, interest and match respectively
//for creating a new user
app.post("/user", function(req, res){
    res.send("New user created!");
})
//for getting users
app.get("/getUser", function(req, res){
    res.send(userArray)
})

//for updating interests
app.put("/interest", function(req, res){
    res.send("You have updated your interests!");
})
//for deleting a match
app.delete("/match", function(req, res){
    res.send("You have deleted a match!");
})
//save express and cors in variables
var express = require("express");
var cors = require("cors");
//initializing express-server
var app = express();
app.use(cors());

//make sure port 3000 is available
const PORT = process.env.PORT || 3000;

//activate server
app.listen(PORT, ()=>{
    console.log("listening at port " + PORT);
})

//my CRUD-endpoints for user, interest and match respectively
app.put("/user", function(req, res){
    res.send(userArray);
})

app.get("/interest", function(req, res){
    res.send(interestArray);
})

app.delete("/match", function(req, res){
})
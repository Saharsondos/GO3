//save express and cors in variables
var express = require("express");
var cors = require("cors");
//initializing express-server
var app = express();
app.use(cors());
//requiring users from module "classes"
const userArray = require("./model/classes");
//requiring the filesystem
const fs = require("fs");
//requiring jwt
const jwt = require("jsonwebtoken");


//make sure port 3000 is available
const PORT = process.env.PORT || 3000;

//activate server
app.listen(PORT, ()=>{
    console.log("listening at port " + PORT);
})

//my CRUD-endpoints for user, interest and match respectively
//for creating a new user
app.post("/user", isAuthorized, (req, res) => {
        res.send("New user created!");
    })
//for getting users
app.get("/getUser", isAuthorized, (req, res) => {
        res.send(userArray);
    })

//for updating interests
app.put("/interest", isAuthorized, (req, res) => {
        res.send("You have updated your interests!");
    })
//for deleting a match
app.delete("/match", isAuthorized, (req, res) => {
        res.send("You have deleted a match!");
    })

//creating a valid json web token
app.get("/jwt", function(req, res){
    let privateKey = fs.readFileSync("./private.pem", "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, { algorithm: "HS256"});
    res.send(token);
})

/*creating a function which will make sure, 
that requests have the authorization header set.*/
function isAuthorized(req, res, next){
    //has authorization header been set?
    if(typeof req.headers.authorization !== "undefined"){
        //retrieve token from header
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync("./private.pem", "utf8");
        //verify token
        jwt.verify(token, privateKey, { algorithm: "HS256"}, (err, decoded) =>{
            //if token hasnt been verified successfully 
            if(err){
                res.status(500).json({ error: "Not authorized" });
            }
            //if token has been verified successfully
            console.log(decoded);
            return next(); //<- will let incoming request pass through.
        })
    //if authorization header has not been set, respond with error
    } else{
        res.status(500).json({ error: "Not authorized" });
    }
}
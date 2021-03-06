//Define model-classes
class User{
    constructor(username, password, age, location, preferredSex){
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location;
        this.preferredSex = preferredSex;
    }
    uploadImage(){
        function uploadImage(){
      }   
    }
    like(){
        function like(){
        }
    }
    sendMessage(){
        function sendMessage(){
        }
    }
}

//extended paymentuser
class PaymentUser extends User{
    constructor(username, password, age, location, preferredSex){
        super(username, password, age, location, preferredSex);
    }
    superLike(){
        function superLike(){
        }
    }
    whoLikedMe(){
        function whoLikedMe(){
        }
    }
}

//class for credit card information
class creditCard{
    constructor(cardHolderName, cardNumber, expireMonth, expireYear, cvc){
        this.cardHolderName = cardHolderName;
        this.cardNumber = cardNumber;
        this.expireMonth = expireMonth;
        this.expireYear = expireYear;
        this.cvc = cvc;
    }
}

//extended freeuser
class FreeUser extends User{
    constructor(username, password, age, location, preferredSex){
        super(username, password, age, location, preferredSex);
    }
    likeLimit(){
        function likeLimit(){
        }
    }
}

class interest{
    constructor(interest1, interest2, interest3){
        this.interest1 = interest1;
        this.interest2 = interest2;
        this.interest3 = interest3;
    }
}

class match{
    //method for matching in app
    match(){
        function match(){
            if((user1.like==user2) & (user2.like==user1)){
                alert("NEW MATCH!");
            }else{
                return false;
            }
        }
    }
}


//my objects/variables for my classes
var user1 = new User("Ole123", "abcd1234", 32, "Copenhagen", "female");
var user2 = new User("barbie", "barbiegirl", 27, "malmö", "male");
var myInterests1 = new interest("cooking", "dancing", "traveling");
var myInterests2 = new interest("tennis", "cooking", "swimming");

//array for users
let userArray = [];
userArray = [user1, user2];
//array for interests
let interestArray = [];
interestArray = [myInterests1, myInterests2];

module.exports=userArray;

class User{
    constructor(username, password, age, location, preferredSex, interest){
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location;
        this.preferredSex = preferredSex;
        this.interest = interest;
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
    constructor(username, password, age, location, preferredSex, creditCard){
        super(username, password, age, location, preferredSex);
        this.creditCard = creditCard;
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


//my objects/variables for my classes
var user1 = new User("Ole123", "abcd1234", 32, "Copenhagen", "female", myInterests1);
var user2 = new User("barbie", "barbiegirl", 27, "malmö", "male", myInterests2);
var myInterests1 = new interest("cooking", "dancing", "traveling");
var myInterests2 = new interest("tennis", "cooking", "swimming");


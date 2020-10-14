class User{
    constructor(username, password, age, location, preferredSex, interest){
        this.username = username;
        this.password = password;
        this.age = age;
        this.location = location;
        this.preferredSex = preferredSex;
        this.interest = interest;
    }
}

//extended paymentuser
class PaymentUser extends User{
    constructor(username, password, age, location, preferredSex, creditCard){
        super(username, password, age, location, preferredSex);
        this.creditCard = creditCard;
    }
}

//extended freeuser
class FreeUser extends User{
    constructor(username, password, age, location, preferredSex){
        super(username, password, age, location, preferredSex);
    }
}

class interest{
    constructor(myInterest1, myInterest2, myInterest3){
        this.myInterest1 = myInterest1;
        this.myInterest2 = myInterest2;
        this.myInterest3 = myInterest3;
    }
}



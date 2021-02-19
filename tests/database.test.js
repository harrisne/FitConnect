var {firebase, db, auth, messages} = require("../config/firebase/config");
var {firebase, db, firestore , auth, messages} = require("./config");
var {time} = require("../config/time");
var {insertIntoTraineeDatabase, insertIntoTrainerDatabase} = require('../config/firebase/database')

describe("testing trainer database", () =>  {

    test('adds data to database', () => {
        var fullName = "Jannis Doer"
        var email = "email@gmail.com"
        var password = "password"
        var sex = "female"
        var age = 20
        var height = "6'0"
        var weight = "150 lbs"
        
        insertIntoTrainerDatabase(fullName,sex,age,height,weight)
    });

    test('adds availability', () => {
        insertAvailability('Jane Doe',"trainer", "monday", new time(6,7))
    });

    //esure that data is removed from database
    //ensure that we can query data in database
    //ensure that we can update data in database
});

describe("testing trainee database", () =>  {
      test('adds data to the database', () => {
        var fullName = "Trainee"
        var email = "email@gmail.com"
        var password = "password"
        var sex = "female"
        var age = 20
        var height = "6'0"
        var weight = "150 lbs"
        
        insertIntoTraineeDatabase(fullName,sex,age,height,weight)

        //should expect that you see the data in the database. check how to do that.
    });

    test('adds availability', () => {
        insertAvailability('Jane Doe',"trainee", "monday", new time(6,7))
    });

    //esure that data is removed from database
    //ensure that we can query data in database
    //ensure that we can update data in database    
});


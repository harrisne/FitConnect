var {firebase, db, auth, messages} = require("../config/firebase/config");
var {insertIntoTraineeDatabase, insertIntoTrainerDatabase} = require('../config/firebase/database')

describe("testing trainer database", () =>  {

    test('adds data to database', () => {
        var fullName = "Trainee"
        var email = "email@gmail.com"
        var password = "password"
        var sex = "female"
        var age = 20
        var height = "6'0"
        var weight = "150 lbs"
        insertIntoTrainerDatabase(fullName,sex,age,height,weight)
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

    //esure that data is removed from database
    //ensure that we can query data in database
    //ensure that we can update data in database    
});


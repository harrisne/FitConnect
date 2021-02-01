var {firebase, db, auth, messages} = require("../config/firebase/config");
var {insertIntoTraineeDatabase, insertIntoTrainerDatabase} = require('../config/firebase/database')
//ensure that data is added to database properly
insertIntoTraineeDatabase("name", "email", "password", "sex0", "age", "height", "weight");
insertIntoTrainerDatabase("Testname", "email", "password", "sex0", "age", "height", "weight");
//esure that data is removed from database
//ensure that we can query data in database

var { time } = require("../config/time");
var { insertIntoTraineeDatabase, insertIntoTrainerDatabase, addAvailability, addTraineeDescription } = require('../config/firebase/database')
var {firestore} = require("../config/firebase/config");

async function inDatabase(user_type, fullName) {
    try {
        const docRef = firestore.collection(user_type).doc(fullName);
        const data = await docRef.get();
        if (!data.exists) {
            return "No user in database";
        } else {
            console.log(data.data());
        }
    }
    catch (error) {
        console.log(error);
    }
}

describe("testing trainer database", () => {

    test('adds data to database', () => {
        var fullName = "Jannise Doer"
        var sex = "female"
        var age = "20"
        var height = "6'0"
        var weight = "150 lbs"

        insertIntoTrainerDatabase(fullName, sex, age, height, weight)

        
        // expect(trainer.age).toBe("20")
    });

    // test('adds availability', () => {
    //     addAvailability('Jannise Doer', "trainer", "monday", new time(6, 7)).catch()
    // });

});

describe("testing trainee database", () => {
    test('adds data to the database', () => {
        var fullName = "Stephanie Louis"
        var sex = "female"
        var user_type = "trainee"
        var age = "20"
        var height = "6'0"
        var weight = "150 lbs"
        var description = "Hi! I'm Stephanie. I'm a trainee looking for aerobic training."
        
        insertIntoTraineeDatabase(fullName, sex, age, height, weight) 
        addAvailability(fullName, user_type, "monday", new time(9,10)) 
        addAvailability(fullName, user_type, "tuesday", new time(11,13)) 
        addAvailability(fullName, user_type, "wednesday", new time(12,15)) 
        addAvailability(fullName, user_type, "thursday", new time(9,10)) 
        addAvailability(fullName, user_type, "friday", new time(16,17)) 
        addTraineeDescription(fullName, description)

    });

    it("find user in database",  async () => {
        const woah = await inDatabase("trainer", "Jannis Doer");
        console.log(woah);
    })

    test('adds availability', () => {
        addAvailability('Trainee', "trainee", "monday", new time(6, 7)).catch()
    });

});


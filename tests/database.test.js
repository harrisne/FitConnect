var { time } = require("../config/time");
var { insertIntoTraineeDatabase, insertIntoTrainerDatabase, addAvailability, inDatabase } = require('../config/firebase/database')

describe("testing trainer database", () => {

    test('adds data to database', () => {
        var fullName = "Jannise Doer"
        var sex = "female"
        var age = "20"
        var height = "6'0"
        var weight = "150 lbs"

        insertIntoTrainerDatabase(fullName, sex, age, height, weight)

        expect(inDatabase("trainer", fullName).age).toBe("20")
    });

    // test('adds availability', () => {
    //     addAvailability('Jannise Doer', "trainer", "monday", new time(6, 7)).catch()
    // });

});

describe("testing trainee database", () => {
    test('adds data to the database', () => {
        var fullName = "Trainee"
        var sex = "female"
        var age = "22"
        var height = "6'0"
        var weight = "150 lbs"

        insertIntoTraineeDatabase(fullName, sex, age, height, weight)


        expect(inDatabase("trainee", fullName).age).toBe("22")

    });

    // test('adds availability', () => {
    //     addAvailability('Trainee', "trainee", "monday", new time(6, 7)).catch()
    // });

});


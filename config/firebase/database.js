var {firestore} = require("./config");
var {timeConverter} = require("../time");

    

async function insertIntoTrainerDatabase(fullName, sex, age, height, weight) {
    await firestore.collection('trainer').doc(fullName).set({
        sex: sex,
        age : age,
        height: height,
        weight: weight
    })
}

async function insertIntoTraineeDatabase(fullName, sex, age, height, weight) {
    await firestore.collection('trainee').doc(fullName).set({
        sex: sex,
        age : age,
        height: height,
        weight: weight
    })
}


async function insertAvailability(fullName, user_type, day, availability) {
    await firestore.collection(user_type).doc(fullName + "/availability" + "/"+ day)
    .withConverter(timeConverter)
    .set(availability)
}

module.exports = {insertIntoTraineeDatabase, insertIntoTrainerDatabase, insertAvailability};
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


async function addAvailability(fullName, user_type, day, availability) {
    await firestore.collection(user_type).doc(fullName + "/availability" + "/"+ day)
    .withConverter(timeConverter)
    .set(availability);
    //Promise.reject("no user in database");
}


async function addTrainerRate(fullName, rate) {
    await firestore.collection('trainer').doc(fullName).update({
        rate: rate
    });
    Promise.reject("no user in database");
}

async function addTraineeDescription(fullName, description) {
    await firestore.collection('trainee').doc(fullName).update({
        description: description
    });
    Promise.reject("no user in database");
}
async function addTrainerDescription(fullName, description) {
    await firestore.collection('trainer').doc(fullName).update({
        description: description
    });
    Promise.reject("no user in database");
}

async function inDatabase(user_type, fullName) {
    const docRef = firestore.collection(user_type).doc(fullName);
    const data = await docRef.get();
    if (!data.exists) {
        console.log('No such document!');
      } else {
        return await data.data();
      }
}


module.exports = {insertIntoTraineeDatabase, insertIntoTrainerDatabase, addAvailability, 
    addTrainerRate, addTraineeDescription, addTrainerDescription, inDatabase};
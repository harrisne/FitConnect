var {firebase, db, firestore , auth, messages} = require("./config");


    
function query() {
    //search for users in database
}

function deleteUser() {

}

async function insertIntoTrainerDatabase(fullName, sex, age, height, weight) {
    await firestore.collection('trainers').doc(fullName).set({
        sex: sex,
        age : age,
        height: height,
        weight: weight
    })
}

async function insertIntoTraineeDatabase(fullName, sex, age, height, weight) {
    await firestore.collection('trainees').doc(fullName).set({
        sex: sex,
        age : age,
        height: height,
        weight: weight
    })
}

//Old Functions for real time database
// function insertIntoTrainerDatabase(fullName, email, password, sex, age, height, weight) {
//     database.ref('trainer/' + fullName).set({
//             email: email,
//             password:password,
//             sex: sex,
//             age: age,
//             height: height,
//             weight: weight
//     });
// }

    // function insertIntoTraineeDatabase(fullName, email, password, sex, age, height, weight) {
    //      database.ref('trainee/' + fullName).set({
    //             email: email,
    //             password: password,
    //             sex: sex,
    //             age: age,
    //             height: height,
    //             weight: weight
    //     });
    // }

module.exports = {insertIntoTraineeDatabase, insertIntoTrainerDatabase};
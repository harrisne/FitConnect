var {firestore} = require("./config");
var {timeConverter, time} = require("../time");

//TODO: Fix availability storage

async function insertIntoTrainerDatabase(fullName, sex, age, height, weight) {
    try {
        await firestore.collection('trainer').doc(fullName).set({
            sex: sex,
            age : age,
            height: height,
            weight: weight
        })
    }
    catch (error) {
        console.log(error);
    } 
}

async function insertIntoTraineeDatabase(fullName, sex, age, height, weight) {
    try {
        await firestore.collection('trainee').doc(fullName).set({
            sex: sex,
            age : age,
            height: height,
            weight: weight
        })
    }
    catch (error) {
        console.log(error);
    }
}

//find way to print entire availability object
//add function to print avaiability
//TODO: Remember to create function to see if people are actually in the database
async function addAvailability(fullName, user_type, day, availability) {
    try {
        await firestore.collection(user_type).doc(fullName + "/availability" + "/"+ day)
        .withConverter(timeConverter)
        .set(availability);
    }
    catch (error) {
        console.log(error);
    }
}


async function addTrainerRate(fullName, rate) {
    try {
        await firestore.collection('trainer').doc(fullName).update({
            rate: rate
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function addTraineeDescription(fullName, description) {
    try {
        await firestore.collection('trainee').doc(fullName).update({
            description: description
        });
        //Promise.reject("no user in database");
    }
    catch (error) {
        console.log(error);
    }
}
async function addTrainerDescription(fullName, description) {
    try {
        await firestore.collection('trainer').doc(fullName).update({
            description: description
        });
        //Promise.reject("no user in database");
    }
    catch (error) {
        console.log(error);
    }
}

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

//shows entire collection in firebase(trainer, trainee, appointment)
async function showCollection(user_type) {
    try {
        const docRef = firestore.collection(user_type);
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
    }
    catch (error) {
        console.log(error);
    }
}

async function showRating(trainer) {
    try {
        const docRef = firestore.collection(trainer);
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data().rating);
          });
    }
    catch (error) {
        console.log(error);
    }
}

async function showAppointments(appointment_collection) {
    try {
        const docRef = firestore.collection(appointment_collection);
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.data());
          });
    }
    catch (error) {
        console.log(error);
    }
}

async function showAvailability(user_type) {
    try {
        const docRef = firestore.collection(user_type);
        const snapshot = await docRef.get();
        snapshot.forEach(async user => {
            //process.stdout.write(user.id);
            //process.stdout.write("=> ");
            availabilityRef = docRef.doc(user.id).collection('availability').withConverter(timeConverter);
            availabilitySnapshot =  await availabilityRef.get()
            availabilitySnapshot.forEach(availability => {
                console.log(availability.id, '=>', availability.data());
            })
          });
    }
    catch (error) {
        console.log(error);
    };
};

async function showNamePlusDescription(user_type) {
    try {
        const docRef = firestore.collection(user_type);
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data().description);
          });
    }
    catch (error) {
        console.log(error);
    }
}

async function showType(user_type) {
    try {
        const docRef = firestore.collection(user_type);
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data().type);
          });
    }
    catch (error) {
        console.log(error);
    }
}

showAvailability('trainee')
//showCollection("trainee");
//showAppointments("appointment");


var fullName = "Stephanie Louis"
var sex = "female"
var user_type = "trainee"
var age = "20"
var height = "6'0"
var weight = "150 lbs"
var description = "Hi! I'm Stephanie. I'm a trainee looking for aerobic training."

// insertIntoTraineeDatabase(fullName, sex, age, height, weight) 
// addAvailability(fullName, user_type, "monday", new time(9,10)) 
// addAvailability(fullName, user_type, "tuesday", new time(11,13)) 
// addAvailability(fullName, user_type, "wednesday", new time(12,15)) 
// addAvailability(fullName, user_type, "thursday", new time(9,10)) 
// addAvailability(fullName, user_type, "friday", new time(16,17)) 
// addTraineeDescription(fullName, description)


// var fullName = "John Doe"
// var sex = "male"
// var age = "25"
// var height = "6'2"
// var weight = "150 lbs"
// var description = "Hi! I'm Stephanie. I'm a trainee looking for flexibility training."
// insertIntoTraineeDatabase(fullName, sex, age, height, weight)
// addAvailability(fullName, user_type, "monday", new time(9,10)) 
// addAvailability(fullName, user_type, "tuesday", new time(11,13)) 
// addAvailability(fullName, user_type, "wednesday", new time(12,15)) 
// addAvailability(fullName, user_type, "thursday", new time(9,10)) 
// addAvailability(fullName, user_type, "friday", new time(16,17)) 
// addTraineeDescription(fullName, description)

// var fullName = "Jane Doe"
// var sex = "female"
// var age = "23"
// var height = "5'5"
// var weight = "150 lbs"
// var description = "Hi! I'm Jane Doe. I'm a trainee looking for weight training."

// insertIntoTraineeDatabase(fullName, sex, age, height, weight)
// addAvailability(fullName, user_type, "monday", new time(9,10)) 
// addAvailability(fullName, user_type, "tuesday", new time(11,13)) 
// addAvailability(fullName, user_type, "wednesday", new time(12,15)) 
// addAvailability(fullName, user_type, "thursday", new time(9,10)) 
// addAvailability(fullName, user_type, "friday", new time(16,17)) 
// addTraineeDescription(fullName, description)

// inDatabase("trainer", "Jannis Doer").then(value => {
//     return value;
// }).catch( ()=> {
//     console.log("Promised Rejected");
// });

module.exports = {insertIntoTraineeDatabase, insertIntoTrainerDatabase, addAvailability, 
    addTrainerRate, addTraineeDescription, addTrainerDescription, inDatabase, showCollection};

// {
//     "availability": [Monday, Tuesday, Wednesday, Thursday, Friday],
//     "age" : 41,
//     "description": "Hi! I'm a trainer looking for people interested in strength training",
//     "height" : "5'5",
//     "rate": 40,
//     "sex": "female",
//     "weight": 130
// }

// {"age": 20,
// "height": "6'0"
// "sex": "male",
// "weight": 150
// }
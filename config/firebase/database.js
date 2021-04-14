var {firestore} = require("./config");
var {timeConverter, time} = require("../time");


//Must insert trainee/trainer into database before running other addXYZ commands.
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


//Adds availability to user 
//Availability should be a time object like => new time(16,17)) 
//Day is a string like => 'friday'
async function addAvailability(fullName, userType, day, availability) {
    try {
        await firestore.collection(userType).doc(fullName + "/availability" + "/"+ day)
        .withConverter(timeConverter)
        .set(availability);
    }
    catch (error) {
        console.log(error);
    }
}

//Adds trainer price to trainer object
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

//Adds description to trainee object
async function addTraineeDescription(fullName, description) {
    try {
        await firestore.collection('trainee').doc(fullName).update({
            description: description
        });
    }
    catch (error) {
        console.log(error);
    }
}

//Adds description to trainer obect
async function addTrainerDescription(fullName, description) {
    try {
        await firestore.collection('trainer').doc(fullName).update({
            description: description
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function inDatabase(userType, fullName) {
    try {
        const docRef = firestore.collection(userType).doc(fullName);
        const data = await docRef.get();
        if (!data.exists) {
            return "No user in database";
        } else {
            return Promise.resolve(data.data());
        }
    }
    catch (error) {
        console.log(error);
    }
}


//shows entire collection in firebase(trainer, trainee, appointment)
async function showCollection(userType) {
    try {
        const docRef = firestore.collection(userType);
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

async function showAppointments() {
    try {
        appointmentArray = []
        const docRef = firestore.collection('appointment');
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            //console.log(doc.data());
            appointmentArray.push(doc.data());
            //console.log(appointmentArray);
            //return Promise.resolve(appointmentArray);
          });
        return appointmentArray;
    }
    catch (error) {
        console.log(error);
    }
}


function convertDate(dateObject) {
    return dateObject.toDate();

}


async function showAvailability(userType, userName) {
    try {
        const docRef = firestore.collection(userType);
        const snapshot = await docRef.get();
        snapshot.forEach(async user => {
            if (user.id == userName) {
                availabilityRef = docRef.doc(user.id).collection('availability').withConverter(timeConverter);
                availabilitySnapshot =  await availabilityRef.get()
                availabilitySnapshot.forEach(availability => {
                    var formattedDate = availability.data().map(convertDate);
                    console.log(availability.id, '=>', formattedDate);
                })
            }
            });
    }
    catch (error) {
        console.log(error);
    };
};


async function showNamePlusDescription(userType) {
    try {
        const docRef = firestore.collection(userType);
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data().description);
          });
    }
    catch (error) {
        console.log(error);
    }
}

async function showType(userType) {
    try {
        const docRef = firestore.collection(userType);
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data().type);
          });
    }
    catch (error) {
        console.log(error);
    }
}




module.exports = {insertIntoTraineeDatabase, insertIntoTrainerDatabase, addAvailability, 
    addTrainerRate, addTraineeDescription, addTrainerDescription, inDatabase, showCollection, showAppointments};

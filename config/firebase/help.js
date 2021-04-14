var {firestore} = require("./config");

async function showAppointments() {
    try {
        appointmentArray = []
        const docRef = firestore.collection('appointment');
        const snapshot = await docRef.get();
        snapshot.forEach(doc => {
            //console.log(doc.data());
            appointmentArray.push(doc.data());
          });
        return Promise.resolve(appointmentArray);
    }
    catch (error) {
        console.log("Error in try-catch");
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
            //console.log(data.data());
            return Promise.resolve(data.data());
        }
    }
    catch (error) {
        console.log(error);
    }
}





 var test = inDatabase('trainer', 'Jane Doe').then((msg) => {
    console.log(msg);
    return  msg;
});



var appt = showAppointments().then((msg) => {
    console.log(msg);
    return msg;
});
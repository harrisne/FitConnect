var {firebase, db, auth, messages} = require("./config");


var database = firebase.database()

function isvalidEntry(username, password) {
	var valid = true;
	if (username.length < 5 || password.length < 5) {
		valid = false;
	}
    return valid
}
    
function query() {
    //search for users in database
}

function deleteUser() {

}

function insertIntoTrainerDatabase(fullName, email, password, sex, age, height, weight) {
    database.ref('trainer/' + fullName).set({
            email: email,
            password:password,
            sex: sex,
            age: age,
            height: height,
            weight: weight
    });
}

    function insertIntoTraineeDatabase(fullName, email, password, sex, age, height, weight) {
         database.ref('trainee/' + fullName).set({
                email: email,
                password: password,
                sex: sex,
                age: age,
                height: height,
                weight: weight
        });
    }

    module.exports = {insertIntoTraineeDatabase, insertIntoTrainerDatabase};
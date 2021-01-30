var {firebase, db, auth, messages} = require("./config");


var trainee = firebase.database().ref("trainee/");
var trainer = firebase.database().ref("trainer/");

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
    trainer.set({
        fullName: {
            email: email,
            password:password,
            sex: sex,
            age: age,
            height: height,
            weight: weight
        }
    });
}

    function insertIntoTraineeDatabase(fullName, email, password, sex, age, height, weight) {
        trainee.set({
            fullName: {
                email: email,
                password: password,
                sex: sex,
                age: age,
                height: height,
                weight: weight
            }
        });
    }

insertIntoTraineeDatabase("name", "email", "password", "sex0", "age", "height", "weight");

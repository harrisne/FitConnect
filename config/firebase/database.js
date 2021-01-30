var {firebase, db, auth} = require("./config");


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

function insertIntoTrainerDatabase(name, email, password, sex, age, height, weight) {
    trainer.set({
        fullName: {
            email: this.email,
            password: this.password,
            sex: this.sex,
            age: this.age,
            height: this.height,
            weight: this.weight
        }
    });
}

    function insertIntoTraineeDatabase(fullName, email, password, sex, age, height, weight) {
        trainee.set({
            fullName: {
                email: this.email,
                password: this.password,
                sex: this.sex,
                age: this.age,
                height: this.height,
                weight: this.weight
            }
        });
    }

//insertIntoTraineeDatabase("name", "email", "password"

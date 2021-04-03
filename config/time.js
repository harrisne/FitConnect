const { convertTimestamps } = require("convert-firebase-timestamp");
class time {
    constructor(start,end) {
        start = start - 5;
        end = end - 5;
        var startDate = new Date();
        var endDate = new Date();

        startDate.setFullYear(2020, 11, 3);
        startDate.setHours(start);
        startDate.setMinutes(0);
        startDate.setSeconds(0);

        endDate.setFullYear(2020, 11, 3);
        endDate.setHours(end); //will eventually have to convert time to 24 time scale
        endDate.setMinutes(0);
        endDate.setSeconds(0);

        this.start = startDate;
        this.end = endDate;
    }
    toString() {
        return "Start: " + this.start + "/n" + "End: " + this.end;
    }
};

// Firestore data converter
//Enables custom object upload to firebase
var timeConverter = {
    toFirestore: function(time) {
        return {
            start: time.start,
            end: time.end
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        data.start = convertTimestamps(data.start);
        data.end = convertTimestamps(data.end);
        return data.start;
    }
};

module.exports = {time, timeConverter};

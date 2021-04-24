# FitConnect version #5
JIE 0319 Spring 2021 

Team members: Allen Averbukh, Nicole Harris, Princeton Henry, and William Sheppard

Front end: React Native, Redux

Back end: Firebase

FitConnect is an application that provides a platform for users to schedule appointments with fitness trainers. 

## Running the Application

1. First you need to make sure that Node.js is installed on your machine. You can install Node.js from [here](https://nodejs.org/en/download/).

1. Navigate to the app directory. `cd ./FitConnect`

1. Install Dependencies `sudo npm install`

1. Install Expo Go on phone from Apple or Android Store if running on phone 

1. Run the app

* To start a general server and get QR code use `npm start`
* To run a web application use `npm run web` or `expo start --web`
* To run an iOS application use `npm run ios` or `expo start --ios` 
* To run an Android application use `npm run android` or `expo start --android`

##Troubleshooting 
* If there is trouble opening the applicaton on mobile, make sure the phone and computer are on the same network. If they are, attempt to connect the phone to the computer through a USB cable to ensure that the same network is being used by the devices. 

* If there is trouble opening the simulator, check the build script to verify that the computer's IP address was properly registered. 

* If the simulator freezes upon loading the javascript files to run the app, close the app and run the commands from "Run the app" again. Restart the Expo Go app on mobile if attempting to run on mobile. 

* Visit https://reactnative.dev/docs/troubleshooting for more details if other issues arise in setting up React Native environment 


## Release Guide
This release we added functionality to both the front-end and back-end. Specifically, we enabled the Cloud Firebase database to update when trainees and trainers select their time of availabilities. Furthermore, we made it so that users need to have created an account and thus registered to the database in order to successfully login. 

There are currently no known bugs or defects with the application. However, at the beginning of the semester, we promised our client a functional messaging and video interfacing system, but we were unable to complete it in past sprints. 
We plan to release a front-end mockup of the messaging platform without functionality for demonstration purposes. 

Defects from Previous Versions that have been fixed: 
1. Users used to be able to log into the app without signup up
2. Users used to be able to select avaiable times that would span over 24 hours 
3. Users used to be able to enter passwords that do not match upon signup and successfully form an account 
4. Front-end used to be completely separate from back-end and cause user data to not be stored. 




Zenhub: https://app.zenhub.com/workspaces/jie-0319-60074353b0c1a5001116fd03/board?repos=331104101

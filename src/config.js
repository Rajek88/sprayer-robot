// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxcjLVBXsluZnDwQKcW0GVXt_1tGoAfUI",
  authDomain: "ldd-project.firebaseapp.com",
  databaseURL:
    "https://ldd-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ldd-project",
  storageBucket: "ldd-project.appspot.com",
  messagingSenderId: "717582662402",
  appId: "1:717582662402:web:cb40d94a7ffd7a649ca01b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// import urllib, json

// url = "http://maps.googleapis.com/maps/api/geocode/json?address=googleplex&sensor=false"

// response = urllib.urlopen(url)

// data = json.loads(response.read())

// print data

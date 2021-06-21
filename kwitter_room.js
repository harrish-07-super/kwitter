
var firebaseConfig = {
  apiKey: "AIzaSyDtUUqhFjbpW6hCb3PXIeWZV1cY3hqaja4",
  authDomain: "kwitter-e4533.firebaseapp.com",
  databaseURL: "https://kwitter-e4533-default-rtdb.firebaseio.com",
  projectId: "kwitter-e4533",
  storageBucket: "kwitter-e4533.appspot.com",
  messagingSenderId: "535833547790",
  appId: "1:535833547790:web:f42f58531b3efeb04b985f",
  measurementId: "G-59EM9CCWRT"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("childkey", childKey);
      console.log("Room_names", Room_names);
      row = "<div class='room_name' id = " + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirect(name){
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
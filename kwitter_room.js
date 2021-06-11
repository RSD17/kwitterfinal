var firebaseConfig = {
      
      apiKey: "AIzaSyDur1wgVsfI_d-_hVYHyRgNxCpOPkhPcn4",
      authDomain: "kwtr-d1289.firebaseapp.com",
      databaseURL: "https://kwtr-d1289-default-rtdb.firebaseio.com",
      projectId: "kwtr-d1289",
      storageBucket: "kwtr-d1289.appspot.com",
      messagingSenderId: "791360918930",
      appId: "1:791360918930:web:372c696897d31234a99d4b"

};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("dcu").innerHTML = "Welcome " + username + "!";

function addRoom() {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      console.log("Room Names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      });});}

getData();

function redirectToRoomName(name) {

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";

}

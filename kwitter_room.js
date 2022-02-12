var firebaseConfig = {
      apiKey: "AIzaSyBw1cz5HmGQMFmMoVDh2OaQrJm_U_u34Ng",
      authDomain: "kwitter-ea21f.firebaseapp.com",
      databaseURL: "https://kwitter-ea21f-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea21f",
      storageBucket: "kwitter-ea21f.appspot.com",
      messagingSenderId: "303498230405",
      appId: "1:303498230405:web:5982b9ed555052184607ec"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row; 
      //End
      });});}
getData();
function redirectToRoomName(Name){
      console.log(Name);
      localStorage.setItem("room_name",Name);
      window.location="kwitter_page.HTML";
}
function addRoom(){
room_name=document.getElementById("room_name").value;
console.log(room_name);
firebase.database().ref("/").child(room_name).update({
      purpose:"addRoomName"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.HTML";
}
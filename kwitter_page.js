//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
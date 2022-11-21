//YOUR FIREBASE LINKS
var firebaseConfig = { 
      apiKey: "AIzaSyBVrFLJTBWkRuIcMnt_rJTRr1Q_KLMpc_Q", 
      authDomain: "kwitter-84574.firebaseapp.com", 
      databaseURL: "https://kwitter-84574-default-rtdb.firebaseio.com",
       projectId: "kwitter-84574", 
       storageBucket: "kwitter-84574.appspot.com", 
       messagingSenderId: "612260283353",
        appId: "1:612260283353:web:fe495562705504ee29cfc8",
         measurementId: "G-2Y2TQKXYQL" };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          user_name = localstorage.getitem("user_name");
          user_name = localstorage.getitem("room_name");
function send()
{
msg = document.getElementById("msg").value
firebase.database().ref(room_name).push(
{ name:user_name,
 message:msg,
 like:0
 });
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

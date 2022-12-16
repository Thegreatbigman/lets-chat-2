// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAvS7IAEeH3enYScG8JD7eZu5XyFBy7FAI",
    authDomain: "lets-chat-3eb03.firebaseapp.com",
    projectId: "lets-chat-3eb03",
    storageBucket: "lets-chat-3eb03.appspot.com",
    messagingSenderId: "985854250293",
    appId: "1:985854250293:web:81f3298d6508348198507c"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}




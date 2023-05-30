function addUser()
{
    user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location="kwitter_room.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAkkFU9kjEZkCEXiqIMYcVfwOYJgC6BXbM",
    authDomain: "practice-1d7ee.firebaseapp.com",
    databaseURL: "https://practice-1d7ee-default-rtdb.firebaseio.com",
    projectId: "practice-1d7ee",
    storageBucket: "practice-1d7ee.appspot.com",
    messagingSenderId: "814434040519",
    appId: "1:814434040519:web:d505b9ed6a0ea819e45ce2"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"random"
    });

    
}

// Initialize Firebase
var config = {
apiKey: "AIzaSyBYvNCSvkF0C_gxDwjGPOlsCTFxRFXbkZk",
authDomain: "classwork-70107.firebaseapp.com",
databaseURL: "https://classwork-70107.firebaseio.com",
projectId: "classwork-70107",
storageBucket: "classwork-70107.appspot.com",
messagingSenderId: "1077648549101"
};
firebase.initializeApp(config);

var database = firebase.database();

function dbReset(){
    database.ref().set({
        Player1: "null",
        Player1Exists: false, 
        Player1Choice: "null",
        Player2: "null",
        Player2Exists: false,
        Player2Choice: "null" 
    });
}

var player1Name;
var player1Choice;
var player1Exists;
var player2Name;
var player2Choice;
var player2Exists;

//dbReset();
$(".RPS").hide();

database.ref().on("value", function(snapshot){
    player1Name = snapshot.val().Player1;
    player1Choice = snapshot.val().Player1Choice;
    player1Exists = snapshot.val().Player1Exists;

    player2Name = snapshot.val().Player2;
    player2Choice = snapshot.val().Player2Choice;
    player2Exists = snapshot.val().Player2Exists;

    // console.log(player1Name);
    // if (player1Name != "null" && player1Name != $("#player-1-name").text()) {
    //     $("#player-1-name").text(player1Name);
    //     $("#player-2-name").text(player2Name);
    // }
    // firebase is dumb, give me SQL
})

database.ref().on("child_changed", function(snapshot){
    player1Name = snapshot.val().Player1;
    player1Choice = snapshot.val().Player1Choice;
    player1Exists = snapshot.val().Player1Exists;

    player2Name = snapshot.val().Player2;
    player2Choice = snapshot.val().Player2Choice;
    player2Exists = snapshot.val().Player2Exists;

    console.log(player1Name);
    if (player1Name != "null" && player1Name != $("#player-1-name").text()) {
        $("#player-1-name").text(player1Name);
        $("#player-2-name").text(player2Name);
    }
    
})

// database.ref().on("child_changed", function(snapshot){
//     //console.log(snapshot.val());

//     player1Name = snapshot.val().Player1;
//     player1Choice = snapshot.val().Player1Choice;
//     player1Exists = snapshot.val().Player1Exists;

//     player2Name = snapshot.val().Player2;
//     player2Choice = snapshot.val().Player2Choice;
//     player2Exists = snapshot.val().Player2Exists;

//     console.log(player1Name);
//     console.log(snapshot.val().Player1);

//     if (player1Name != "null" && player1Name != $("#player-1-name").text()) {
//         $("#player-1-name").text(player1Name);
//     }
// })

$("#joinBtn").on("click", function(){

    //console.log(player2Exists);
    if (player1Exists == false) {
        player1Name = $("#userName").val().trim();
        //console.log(player1Name);
        $("#player-1-name").text(player1Name);
        $("#userName").val("");
        database.ref().update({
            Player1: player1Name,
            Player1Exists: true
        })
    }
    else if (player1Exists == true && player2Exists == false) {
        player2Name = $("#userName").val().trim();
        //console.log(player2Name);
        $("#player-2-name").text(player2Name);
        database.ref().update({
            Player2: player2Name,
            Player2Exists: true
        })
    }
})
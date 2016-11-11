//==========VARIABLES=======================================
var q1 = "You enter an ancient temple and you are very curious and step a few steps into it. The stone door shuts behind you and you are left with a question. Do you explore or stay and try to find an exit?";
//
var q2 = "You come to 2 dark stairways, do you go down the left or right one?";
//
var right = "You went down the correct stairways and look at a door, the floor looks a bit unstable and you want to decide quickly, do you open the door and enter the room or inspect the room?";
//
var left = "The stairway you chose collapsed! You drop into a deep dark pit...";
var q3 = "You went down the correct stairways and look at a door, the floor looks a bit unstable and you want to decide quickly, do you open the door and enter the room or inspect the room?";

var door = "You walk into the dark room and the dooor shuts behind you.";

var inspect = "You find a secret pathway under a small section of the floor, you go down and enter the treasure room! It looks suspicous and there is a small exit that leads outside, would your risk it and take some treasure or exit and leave?";

var q4 = "You find a secret pathway under a small section of the floor, you go down and enter the treasure room! It looks suspicous and there is a small exit that leads outside, would your risk it and take some treasure or exit and leave?";

//==========GAME MECHANIC=================================================
document.getElementById("info").innerHTML = q1;

function explore() {
  document.getElementById("info").innerHTML = q2;
  document.getElementById("q1_choice").style.display = "none";
  document.getElementById("q2_choice").style.display = "inherit";
  document.getElementById("gameArea").style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/736x/e4/76/3b/e4763b0dbd64d83d854c44c06725066b.jpg')"; 
}

function rightdirection() {  
    document.getElementById("info").innerHTML = q3;
    document.getElementById("q2_choice").style.display = "none";
    document.getElementById("q3_choice").style.display = "inherit";
}

function leftdirection() {
  if (document.getElementById("right").style.display == "none") {
    document.getElementById("info").innerHTML = left;
    document.getElementById("q2_choice").style.display = "none";
    document.getElementById("q3_choice").style.display = "inherit";
    //change background image again here
  } else {
    document.getElementById("info").innerHTML = left;
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "none";
  }
}

function inspect() {
    document.getElementById("info").innerHTML = q4;
    document.getElementById("q3_choice").style.display = "none";
    document.getElementById("q4_choice").style.display = "inherit";
}

function door() {
    document.getElementById("info").innerHTML = door;
    document.getElementById("q3_choice").style.display = "none";
    document.getElementById("q4_choice").style.display = "inherit";
}






function exit() {
  document.getElementById("info").innerHTML = q5;
  document.getElementById("q4_choice").style.display = "none";
  document.getElementById("q5_choice").style.display = "inherit";
  document.getElementById("gameArea").style.backgroundImage = "url('http://www.clipartkid.com/images/546/justice-20clipart-clipart-panda-free-clipart-images-o9pwPl-clipart.png')"; 
}
function init() {

  //Player 1 = O
  var player1 = '<img src="  https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-blank-128.png">';
  //player2 = X
  var player2 = '<img src="https://image.freepik.com/free-icon/cross-symbol_318-69644.png">';
var X = '<img src="https://image.freepik.com/free-icon/cross-symbol_318-69644.png">';
  var resetButton = document.getElementById("reset");
  var playerMove = true;
  var currentPlayer = "X";
  //Winning combination formula
  var combo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  //reset the game each time a player click on it

  var resetButton = document.getElementById("reset");
  resetButton.addEventListener('click', function() {
    location.reload();
  });

//Assign listener for boxes
//get all the boxes elements
var boxes = document.getElementsByClassName("box");

  for ( i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', executeMove);
  }

  function executeMove( event ){
    var box = event.target;
    var statusMsg =  document.getElementById("status-msg");
    //Put a circle in the box
    if(box.innerHTML === "" && currentPlayer === "X" ) {
      box.innerHTML = player1;

      currentPlayer = "O";
      statusMsg.innerHTML = "Player 1's turn now.";
      checkWinner();

    } else if(box.innerHTML === "" && currentPlayer === "O" ){
      box.innerHTML = player2;
      currentPlayer = "X";
      statusMsg.innerHTML = "Player 2's turn now.";
      checkWinner();
    }
  }

  //Check all the rows and find winning rows
  //Check who is the winner of that row and prompt
  //reload the page

    function checkWinner() {
      var firstInput = document.getElementById("one").innerHTML;
      var secondInput = document.getElementById("two").innerHTML;
      var thirdInput = document.getElementById("three").innerHTML;
      var fourthInput = document.getElementById("four").innerHTML;
      var fifthInput = document.getElementById("five").innerHTML;
      var sixthInput = document.getElementById("six").innerHTML;
      var seventhInput = document.getElementById("seven").innerHTML;
      var eighthInput = document.getElementById("eight").innerHTML;
      var ninthInput = document.getElementById("nine").innerHTML;
      if(firstInput === player1 && secondInput === player1 && thirdInput === player1){
        alert("winner is player 1");
        location.reload()
      } else if (fourthInput === player1 && fifthInput === player1 && sixthInput === player1){
        alert("winner is player1");
        location.reload()
      } else if (seventhInput === player1 && eighthInput === player1 && ninthInput === player1){
        alert("winner is player1");
        location.reload()
      } else if (firstInput === player1 && fourthInput === player1 && seventhInput === player1){
        alert("winner is player1");
        location.reload()
      } else if (secondInput === player1 && fifthInput === player1 && eighthInput === player1){
        alert("winner is player1");
        location.reload()
      } else if (thirdInput === player1 && sixthInput === player1 && ninthInput === player1){
        alert("winner is player1");
        location.reload()
      } else if (firstInput === player1 && fifthInput === player1 && ninthInput === player1){
        alert("winner is player1");
        location.reload()
      } else if (thirdInput === player1 && fifthInput === player1 && seventhInput === player1){
        alert("winner is player1");
        location.reload()
      }else if(firstInput === player2 && secondInput === player2 && thirdInput === player2){
        alert("winner is player 2");
        location.reload()
      } else if (fourthInput === player2 && fifthInput === player2 && sixthInput === player2){
        alert("winner is player2");
        location.reload()
      } else if (seventhInput === player2 && eighthInput === player2 && ninthInput === player2){
        alert("winner is player2");
        location.reload()
      } else if (firstInput === player2 && fourthInput === player2 && seventhInput === player2){
        alert("winner is player2");
        location.reload()
      } else if (secondInput === player2 && fifthInput === player2 && eighthInput === player2){
        alert("winner is player2");
        location.reload()
      } else if (thirdInput === player2 && sixthInput === player2 && ninthInput === player2){
        alert("winner is player2");
        location.reload()
      } else if (firstInput === player2 && fifthInput === player2 && ninthInput === player2){
        alert("winner is player2");
        location.reload()
      } else if (thirdInput === player2 && fifthInput === player2 && seventhInput === player2){
        alert("winner is player2");
        location.reload()
      }} //end of checkWinner function
      }

window.addEventListener("load", init, false);
//Start init function only after page has loaded.

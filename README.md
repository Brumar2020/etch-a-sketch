This is an etch-a-sketch program created to follow TheOdinProject's front-end web development curriculum.


function playerPlay() {
        playerPick = prompt("Please enter rock, paper, or scissors");
        playerChoice = playerPick.toLowerCase().replace(/\s/g, "");
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
          alert("Please try again and enter either rock, paper, or scissors");
          playerPick = prompt("Please enter rock, paper, or scissors");
          playerChoice = playerPick.toLowerCase().replace(/\s/g, "");
        }
        
          return playerChoice;
        }
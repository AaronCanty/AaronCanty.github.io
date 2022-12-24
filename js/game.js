let player_win_count = 0;
let computer_win_count = 0;


// random choice
function generateComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function gameRound(event) {
  let player_choice = event.target.classList.value;
  let computer_pick = generateComputerChoice(["rock", "paper", "scissors"]); // computer generate a choice from the three options


  let result_div = document.querySelector(".score");
  let win_counter = document.querySelector(".wins");
  let round_result;

  // you choose rock
  if (player_choice === "rock") {
    document.getElementById("p_hand").src = "./images/rock.png";
    if (computer_pick === "scissors") {
      round_result === "You picked rock, PC picked scissors. You win!";
      document.getElementById("pc_hand").src = "./images/scissors.png";
      document.getElementById("play_by_play").innerHTML = "You picked rock, PC picked scissors. You win!";
      player_win_count++;
      console.log("Player win:" + player_win_count);
      console.log(player_choice + computer_pick);

    }
    else if (computer_pick === "paper") {
      round_result === "You picked rock, PC picked paper. PC wins!";
      document.getElementById("pc_hand").src = "./images/paper.png";
      document.getElementById("play_by_play").innerHTML = "You picked rock, PC picked paper. PC wins!";
      computer_win_count++;
      console.log("Computer win:" + computer_win_count);
      console.log(player_choice + computer_pick);

    }
    else if (computer_pick === "rock") {
      round_result === "You both pick the same thing.";
      document.getElementById("pc_hand").src = "./images/rock.png";
      document.getElementById("play_by_play").innerHTML = "You both pick the same thing.";
      console.log(player_pick + computer_pick);
      console.log("Player win:" + player_win_count);
      console.log("Computer win:" + computer_win_count);

    }
  }

  // you choose paper
  else if (player_choice === "paper") {
    document.getElementById("p_hand").src = "./images/paper.png";
    if (computer_pick === "rock") {
      round_result === "You picked paper, PC picked rock. You win!";
      document.getElementById("pc_hand").src = "./images/rock.png";
      document.getElementById("play_by_play").innerHTML = "You picked paper, PC picked rock. You win!";
      console.log("Player win:" + player_win_count);
      player_win_count++;
      console.log(player_choice + computer_pick);


    }
    else if (computer_pick === "scissors") {

      round_result === "You picked paper, PC picked scissors. PC wins!";
      document.getElementById("pc_hand").src = "./images/scissors.png";
      document.getElementById("play_by_play").innerHTML = "You picked paper, PC picked scissors. PC wins!";
      console.log("You picked paper, PC picked scissors. PC wins!");
      console.log("Computer win:" + computer_win_count);
      computer_win_count++;
      console.log(player_choice + computer_pick);

    }
    else if(computer_pick === "paper") {
      round_result === "You both pick the same thing.";
      document.getElementById("pc_hand").src = "./images/paper.png";
      document.getElementById("play_by_play").innerHTML = "You both pick the same thing.";
      console.log("You both pick the same thing.");
      console.log("Player win:" + player_win_count);
      console.log("Computer win:" + computer_win_count);
      console.log(player_choice + computer_pick);


    }
  }


  // you choose scissors
  else if (player_choice === "scissors") {
    document.getElementById("p_hand").src = "./images/scissors.png";
    if (computer_pick === "paper") {
      document.getElementById("pc_hand").src = "./images/paper.png";
      round_result === "You picked scissors , PC picked paper. You win!";
      document.getElementById("play_by_play").innerHTML = "You picked scissors , PC picked paper. You win!";

      console.log("You picked scissors , PC picked paper. You win!");
      player_win_count++;
      console.log("Player win:" + player_win_count);
      console.log(player_choice + computer_pick);

    }
    else if (computer_pick === "rock") {
      document.getElementById("pc_hand").src = "./images/rock.png";
      round_result === "You picked scissors, PC picked rock. PC wins!";
      console.log("You picked scissors, PC picked rock. PC wins!");
      document.getElementById("play_by_play").innerHTML = "You picked scissors, PC picked rock. PC wins!";
      computer_win_count++;
      console.log("Computer win:" + computer_win_count);
      console.log(player_choice + computer_pick);

    }
    else if(computer_pick === "scissors") {
      document.getElementById("pc_hand").src = "./images/scissors.png";
      round_result === "You both pick the same thing.";
      document.getElementById("play_by_play").innerHTML = "You both pick the same thing.";

      
      console.log("You both pick the same thing.");
      console.log("Player win:" + player_win_count);
      console.log("Computer win:" + computer_win_count);
      console.log(player_choice + computer_pick);

    }
  }

  //update div.result
  result_div.textContent = round_result;
  //update score
  // command substitution
  win_counter.textContent = `You : ${player_win_count} PC : ${computer_win_count}`;

}

function playGame() {

  let options = document.querySelector(".player_pick");
  addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    gameRound(event);
    if (!isButton) {
      return;
    }
    else if (player_win_count == 10 || computer_win_count == 10) {
      const score = document.querySelector(".score");
      document.getElementById("rock").style.display = "none";
      document.getElementById("paper").style.display = "none";
      document.getElementById("scissors").style.display = "none";
      document.getElementById("how_to_play").style.display = "none";
      document.getElementById("play_again").style.display = "block";
      displayWinner();
    }
  }
  );
}


//after game ends
function displayWinner() {
  const wins = document.querySelector(".wins");
  if (computer_win_count > player_win_count) {
    document.getElementById("game").style.display = "none";


    wins.innerText = "PC outsmarted you! You lose! \r\n\r\n Your score: " + player_win_count + "\r\n Computer score :" + computer_win_count;
  }
  else if (player_win_count > computer_win_count) {
    wins.innerText = "You beat the PC, hooray! \r\n\r\n Your score: " + player_win_count + "\r\n Computer score :" + computer_win_count;

  }
  else wins.innerText = "It was a tie. How boring. \r\n\r\n Your score: " + player_win_count + "\r\n Computer score :" + computer_win_count;;

}

//starting up the game
playGame();


function on() {
  document.getElementById("about-overlay").style.display = "block";
  document.getElementById("text").style.display = "block";
}

function off() {
  document.getElementById("about-overlay").style.display = "none";
  document.getElementById("text").style.display = "none";

}


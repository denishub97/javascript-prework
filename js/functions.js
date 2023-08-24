'use strict';
const PAPER = 'papier';
const ROCK = 'kamien';
const SCISSORS = 'nozyce';

const PLAYER = 'Gracz';
const REMIS = 'Remis';
const COMPUTER = 'Komputer';

let scores = {
  pc: 0,
  player: 0
};

//Poniżej opisuję wybór przycisków przez gracza
const elemOutput = document.querySelector('#output'); // pierwszy znaleziony
const playerResult = document.querySelector('#playerResultContainer');
const pcResult = document.querySelector('#pcResultContainer');
const result = document.querySelector('#result');
const pickRock = document.getElementById(ROCK);
const pickPaper = document.getElementById(PAPER);
const pickScissors = document.getElementById(SCISSORS);

// Nasłuchiwanie przycisków wyboru dla gracza
pickRock.addEventListener('click', function () {
    playerMove(ROCK)
});

pickPaper.addEventListener('click', function () {
    playerMove(PAPER)
});

pickScissors.addEventListener('click', function () {
    playerMove(SCISSORS)
});

// Opis funkcji pcMove
function getPCMove() {
  let rand = Math.floor((Math.random() * 10) % 3);
  // 0 1 2
  switch(rand) {
    case 0: return ROCK;
    case 1: return SCISSORS;
    case 2: return PAPER;
  }
}
// OPiS FUNKCJI SPRAWDZAJĄCEJ WYNIK ROZGRYWKI
function resultOfTheGame(){
  if (scores.pc === 5){
  result.innerHTML = 'Wygrał komputer';
  document.querySelector('#new-game')
    .style.display = 'block'
  document.querySelector('.dismiss')
    .style.display = 'none'
  document.querySelector('#output')
    .style.display = 'none'
  }
  else if (scores.player === 5){
  result.innerHTML = 'Wygrałeś';
  document.querySelector('#new-game')
    .style.display = 'block'
  document.querySelector('.dismiss')
    .style.display = 'none'
  document.querySelector('#output')
    .style.display = 'none'
  }
}

// Opis funkcji playerMove
let playerMove = function(playerPick) {
  let winner = COMPUTER;
  let winnerLabel = 'Komputer'
  let pcPick = getPCMove();
  
  console.clear();
  console.log(playerPick + ' vs. ' + pcPick);
  
  if (playerPick === pcPick) {
    winner = REMIS;
    winnerLabel = REMIS;
  } else if (
      (playerPick === ROCK && pcPick === SCISSORS)
      || (playerPick === SCISSORS && pcPick === PAPER)
      || (playerPick === PAPER && pcPick === ROCK)
    ) {
      winner = PLAYER;
      winnerLabel = PLAYER;
    }
  
  console.log('winner ' + winner);
  
  elemOutput.innerHTML = 'Wygrał: ' + winnerLabel + '<br>' + PLAYER + ' wybrał: ' + playerPick + '<br>Komputer wybrał: ' + pcPick;
  
  if (winner === COMPUTER){
    scores.pc += 1
  }
  else if (winner === PLAYER){
    scores.player += 1
  }
  
  watchingScore();
 
  resultOfTheGame();
}

// Sprawdzanie wyniku rozrywki:

function watchingScore(){
  playerResult.innerHTML = 'Wynik gracza: ' + scores.player;
  pcResult.innerHTML = 'Wynik komputera: ' + scores.pc;
}
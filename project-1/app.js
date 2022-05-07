window.onload = function() {

let playerPoints = 0;
let cpuPoints = 0;
let roundNumber = 1;
let playerPick;
let compDeck;
let count = 0;
let compNum = 0;
let beggarCard = document.getElementById('beggar');
let citizenCards = document.getElementsByClassName('citizen')
let kingCard = document.getElementById('king');
let play = document.getElementById('play');
let endStats = document.getElementById('endStats');
let gameText = document.getElementById('gameText');
let shuffleSound = document.createElement('audio') 
	shuffleSound.src = 'sounds/shuffling-cards-1.mp3'
	shuffleSound.volume = 0.1;
let winSound = document.createElement('audio')
	winSound.src = 'sounds/announcer_victory.mp3'
	winSound.volume = 0.3;
let loseSound = document.createElement('audio')
	loseSound.src = 'sounds/profound_sadness.mp3'
	loseSound.volume = 0.1;
let tieSound = document.createElement('audio')
	tieSound.src = 'sounds/nani-sore-x3.mp3'
let roundLossSound = document.createElement('audio')
	roundLossSound.src = 'sounds/Jojos Bizarre Adventure Joseph Oh No  www.azmp3streaming.com .mp3'
	roundLossSound.volume = 0.1;
let roundWinSound = document.createElement('audio')
	roundWinSound.src = 'sounds/ggst-counter.mp3'
	roundWinSound.volume = 0.1
let roundTieSound = document.createElement('audio')
	roundTieSound.src = 'sounds/hm.mp3'
	roundTieSound.volume = 0.1;


let citizenLoop = () => {
	for (let i = 0; i < citizenCards.length; i++) {
		citizenCards[i].style.border = 'none';	
		citizenCards[i].style.width = '150px';
	}
};
	
//Event Listeners for clicking cards
play.addEventListener('click', () => {
	return roundWin();
});

beggarCard.addEventListener('click', function() {
	playerPick = 'beggar';
	this.style.border = '4px solid red';
	this.style.width = '175px';
	citizenLoop();
});

kingCard.addEventListener('click', function() {
	playerPick = 'king';
	this.style.border = '4px solid red';
	this.style.width = '175px';
	citizenLoop();
});

for (let i = 0; i < citizenCards.length; i++) {
	citizenCards[i].addEventListener('click', function() {
		beggarCard.style.border = 'none';
		beggarCard.style.width = '150px';
		kingCard.style.border = 'none';
		kingCard.style.width = '150px';
		citizenLoop();

		playerPick = 'citizen';
		this.style.border = '4px solid red';
		this.style.width = '175px';
		
	})
};

//Was supposed to randomly determine starting deck but currently only gives King first
let whichDeck = () => {
	if (beggar) {
		beggarCard.style.display = 'inline';
		kingCard.style.display = 'none';
	}
	else {
		beggarCard.style.display = 'none';
		kingCard.style.display = 'inline';
	} 
};

//Checks round count to switch player deck every 3 rounds after the first
let roundCheck = () => {
	if ((roundNumber < 2)) {
		beggar = false;
		return beggar;
	}
	else if ((roundNumber > 4) && (8 > roundNumber)) {
		beggar = false;
		return beggar;
	}
	else if (roundNumber > 10) {
		gameOver();
	} 
	else {
		beggar = true;
		return beggar;
	}
};	

//Compares player card choice with cpu's to determine outcome of round
let roundWin = () => {
  if (playerPick == 'citizen') {
		citizenCards[count].style.display = 'none';
		 count++;
		 console.log(count);
	}
let roundProg = () => {
	roundNumber++;
	gameStart();		
}
	compNum = Math.random() * 5 | 0;
	compPick = compDeck[compNum];
	
	//Having an issue where a tie will progress the round count, but removing that line doesn't allow citizen cards to be 'discarded'
	switch (playerPick) {
		case 'king': 
			if (compPick == 'beggar') {
				gameText.innerHTML ='Opponent plays ' + compPick + ' Opponent wins this round...';
				cpuPoints = cpuPoints + 3;
				roundLossSound.play();
				endStats.innerHTML = ' You: ' + playerPoints + ' | ' + 'Enemy: ' + cpuPoints;
				roundProg();
				resetHand()
				break;
			}
			gameText.innerHTML = 'Opponent plays ' + compPick + ', you win this round!';
			roundWinSound.play();
			playerPoints++;
			endStats.innerHTML = 'You: ' + playerPoints + ' | ' + 'Enemy: ' + cpuPoints;
			roundProg();
			resetHand()
			break;
						

		case 'beggar': 
			if (compPick == 'king') {
				gameText.innerHTML = 'Opponent plays ' + compPick + ', you win this round!';
				roundWinSound();
				playerPoints = playerPoints + 3;
				endStats.innerHTML = 'You: ' + playerPoints + ' | ' + 'Enemy: ' + cpuPoints;
				roundProg();
				resetHand()
				break;
			}
			gameText.innerHTML = 'Opponent plays ' + compPick + ', Opponent wins this round...';
			roundLossSound.play();
			cpuPoints++;
			endStats.innerHTML = 'You: ' + playerPoints + ' | ' + 'Enemy: ' + cpuPoints;
			roundProg();
			resetHand()
			break;		

		case 'citizen':
			if (compPick == 'king') {
				gameText.innerHTML = 'Opponent plays ' + compPick + ', Opponent wins this round...';
				roundLossSound.play();
				cpuPoints++;
				endStats.innerHTML = 'You: ' + playerPoints + ' | ' + 'Enemy: ' + cpuPoints;
				roundProg();
				resetHand()
				break;
			}
			else if (compPick == 'beggar') {
				gameText.innerHTML = 'Opponent plays ' + compPick + ', you win this round!';
				roundWinSound.play();
				playerPoints++;
				endStats.innerHTML = 'You: ' + playerPoints + ' | ' + 'Enemy: ' + cpuPoints;				
				roundProg();
				resetHand()
				break;
			}
			gameText.innerHTML = 'Opponent plays ' + compPick + ', Tie, play another card...';
			roundTieSound.play()
			roundCount++;
			gameStart();
			resetHand();
			break;			
		}
	playerPick = null;
	resetHand();
	return;
};

//Generated cpu deck
let computerDeck = () => {
	compDeck = new Array(5);
	if (beggar) {
		compDeck = ['king', 'citizen', 'citizen', 'citizen', 'citizen'];
		return compDeck;
	}
	else {
		compDeck = ['beggar', 'citizen', 'citizen', 'citizen', 'citizen'];
		return compDeck;
	}
};

//Start of game, makes new hands between rounds
let gameStart = () => {
	roundCheck();
	whichDeck();
	computerDeck();
	count = 0;
	compNum = 0;
 	if (beggar) {
 		beggarCard.style.display = 'inline';
 		for (let i = 0; i < citizenCards.length; i++) {
 			citizenCards[i].style.display = 'inline';
 		}
 	}
 	else {
 		kingCard.style.display = 'inline';
 		for (let i = 0; i < citizenCards.length; i++) {
 			citizenCards[i].style.display = 'inline';
 		}
 	}
 	return;
 };

 let resetHand = () => {
	beggarCard.style.border = 'none';
	beggarCard.style.width = '150px';
	kingCard.style.border = 'none';
	kingCard.style.width = '150px';
	citizenLoop();
}

 //Checks point totals after 12 rounds and determines winner
 let gameOver = () => {
	endGameText.style.display = 'inline';
	gameUI.style.display = 'none';
	if (playerPoints < cpuPoints) {
		endGameText.innerHTML = 'You Lose...';
		loseSound.play();
	}
	else if (playerPoints == cpuPoints) {
		endGameText.innerHTML = 'A Stalemate at' + ' ' + playerPoints + ' ' + 'each...';
		}
	else {
		endGameText.innerHTML = 'You overthrew the Patriarchy!';
		winSound.play();
	}
};


endStats.innerHTML = ' You: ' + playerPoints + ' | ' + 'Opponent: ' + cpuPoints;
whichDeck();
roundCheck();
gameStart();
};

//Currently if Play button is pressed 5 times before making a card selection the cpu card selection will return as 'undefined'. Attempted to write an 'if/else' statement for the switch case but no success



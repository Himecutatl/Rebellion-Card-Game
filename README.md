# Rebellion-Card-Game
The game is similar to Rock Paper Scissors but with King, Civilian and Beggar cards. (King > Civilian; Civilian > Beggar; Beggar > King) It is played with two decks, each containing four Civilians and one of either the King or Beggar between them. The computer opponent will play the card face down first and players will respond by selecting a card of their own from the hand. If the result is a tie, the cards that were just played are removed until the next round and another card must be played until a round winner is determined. Both players start with a total of 10 points and the winner is determined when a player's points are depleted. Winning a round with the King deck will subtract 1 point from the opponent and add it to the winner's, but given the natural advantage the King deck has over the Beggar, when the player with the Beggar deck wins they will gain 3 points instead. After each round's conclusion the players will swap decks and start a new round until the maximum round count is met.

# Screenshot
<img width="1435" alt="Screen Shot 2022-05-07 at 4 09 09 AM" src="https://user-images.githubusercontent.com/98249558/167245619-9df46739-0fd3-41c0-9f96-95420cedbfcd.png">

<img width="1435" alt="Screen Shot 2022-05-07 at 4 17 46 AM" src="https://user-images.githubusercontent.com/98249558/167245735-a2ff5b52-15f7-43aa-89d7-f5b825890b41.png">


# Technologies Used
HTML, CSS, Javascript

# User Stories
//MVP GOALS//

-As a player I want to be able to select my card and have it clear which one my selection is.

-As a player I want confirmation of whether or not my choice has defeated the opponent and have points adjusted to reflect that so that the general game state is apparent.

-As a player in the case of a tie I want the game to continue while removing the option of the previously played cards until a winner is determined.

-As a player I want a log of the player actions to saliently determine the game state.

-As a player I want to be sure that the decks are swapped between a set number of rounds to balance the odds as much as possible.

-As a player I want a GAME OVER prompt or screen to appear after the set max round count and for the winner to be determined based on number of points.

//STRETCH GOALS//

-As a player I want there to be eye catching visual elements to the cards and board themselves to make it aesthetically interesting and pleasing.

-As a player having audio queues for events like winning a round or using a Beggar to defeat a King would enhance play experience.

-As a player I would like for the decks to swap after every three rounds or so to allow for the most balanced odds in play as the King deck is at a heavy advantage and playing the King deck first in a limited round count can skew fairness.

-As a player I would like a visual element displaying the opponent's hand, but 'face down' and having the number of cards appearing decrease with each citizen tie similar to the player.

-As a player I think a wagering system would be more interesting versus a set point total with the same 3x multiplier for the Beggar deck winning.

# Issues
-Unable to successfully randomize starting deck selection so currently giving the Player the King deck to start but only for one round then resuming normal play.

-If the player presses the Play button 5+ times without making a card selection and then tries to play normally the computer card will appear as 'undefined'. Attempted an if/else statement to turn the Play button event listener off but caused more bugs, will address later.

-The resetHand function doesn't always seem to work after Tie rounds

-Could not make opponent's deck a visible element in time


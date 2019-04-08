<<<<<<< HEAD
# Pig-Dice
=======
# PIG DICE
## Description
A game played by 2 players who roll a six-sided die and accumulate points. The winner of the game is the player who is first to accumulate 100 points.

## Features
1. As a user, I want to roll the dice when it's my turn to play in the game.
2. As a user, I want to see the score I get for each roll of the dice I make in the game.
3. As a user, I want to see my cumulative score for each round I play in the game. For example, if I roll the scores 2-6-3 consecutively, I should see my end score as 11.
4. As a user, I want the option to hold my score when I'm satisfied with the points I've gained in a round of playing. The game should, therefore, add my held score to my most recent cumulative score.
5. As a user, I want to be alerted when my dice rolls on number 1. This will help me know that I can't roll the dice until the alternate player takes their round.
6. As a user, I need a way to know which player has won the game, which means they have scored 100 points before the alternate player.


## BDD
| BEHAVIOUR                            | INPUT EXAMPLE                           | OUTPUT EXAMPLES       |
|--------------------------------------|:------------------------------------:|--------------------------|
|Player1 clicks Roll Dice button |      Click Roll Dice button  |                 Dice rolls and a random  number is generated|
|If Player1 rolls any number other than 1, that number is added to roundtotal | Roll Dice = 3 |            Round Total = 3 |
|If Player1 rolls a 1, no score is added to round total, and player1 turn is terminated | Roll Dice = 1 | Round total = 0 and Player 2 begins their turn |
|if player1 rolls any number other than 1, they can save the score, which automatically ends their turn | Roll Dice = 3 | Total Score = 3 |
| When a player's total score reaches 100 or more, the game ends and a winner alert pops up |Player1 total score = 100 | Winner alert pops up |
The UI templates can be tested on [github pages](https://tgalvinjr.github.io/Pig-Dice/)
## Setup instructions
1. Clone the repository 
`git clone https://tgalvinjr.github.io/Pig-Dice/`
2. Switch to the projet directory 
`cd Pig-Dice`
3. Launch the `index.html` in a browser preferably `Google Chrome`

## Technologies 
`HTML5`, `CSS3`, `JavaScript`, `Bootstrap`, `JQuery`

## Known Bugs
The game does not terminate and refresh scores after a winner is declared. Players have to manually refresh the page

### Author(s) information
Alvin Michoma
[Github](https://github.com/tgalvinjr)

## License and Copyright information
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/tgalvinjr/Pig-Dice/blob/master/LICENSE) file for details

## Acknowledgments
- Hat tip to anyone who unblocked me in class
- Special thanks to Moringa TMs Peter, Edgar and Newton for the guidance

>>>>>>> gh-pages

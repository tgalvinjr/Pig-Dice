# PIG DICE
## Description
A game played by 2 players who roll a six-sided die and accumulate points. The winner of the game is the player who is first to accumulate 100 points.

## Functionality

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

### Author(s) information
Alvin Michoma
[Github](https://github.com/tgalvinjr)

## License and Copyright information
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/tgalvinjr/Pig-Dice/blob/master/LICENSE) file for details

## Acknowledgments
- Hat tip to anyone who unblocked me in class
- Special thanks to Moringa TMs Peter and Newton for the guidance


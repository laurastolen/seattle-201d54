'use strict';

console.log('it worked');


// Ask them their name ... relentlessly
/*
x save a variable with their answer
  x write a loop that prompts them
  x needs to escape : condition: when you have received a response : response is trueTHY
    x while loop ( doesnt always need a count)
    x put prompt inside the loop
    x save the result into the usersName variable
*/

var usersName = prompt('what is your name');
while(usersName === ''){ // usersName.length < 3, usersNAme.length === 0, !usersName
  console.log(usersName);
  usersName = prompt(' no i mean it what is your name');
}
console.log('final name ' + usersName);
alert('sup, ' + usersName + ' welcome to my awesome site');

// Ask them to guess at a food that I like 3 foods, 5 guesses
/*
    possibilities: in a variable, store favorite foods in an array (refrigerator)
    guessCount for user's guesses
  write a loop (while loop)
    condition is based on two things:
    compare guess to the possibilities and stop if correct
    stop after 3

    increment the guessCount when they guess

    save a variable: the guesses, guess
  */

// guess how many dogs nicholas owns 1 - 100000

var favoriteFoods = ['pizza', 'shepherd\'s pie', 'falafel'];
var guessCount = 4;
var correctGuessFlag = false;
var theirGuessAtFood;

// keep going while they have guesses AND they have still not guessed correctly
// conditions: exceeded 5, or guessed a food
while(guessCount > 0 && correctGuessFlag === false){
  theirGuessAtFood = prompt('try again');


  guessCount--;
  for(var i = 0; i < 3; i++){
    if(favoriteFoods[i] === theirGuessAtFood){
      correctGuessFlag = true;
    }
  }


}

alert('finished');
// if guess is correct, correcGuess flag = true;

'use strict';

// Vinicio - function declaration
function askUserIfTheyLikePizza() {
  var doesUserLikePizza = confirm('Do you like Pizza?');
}

function askUserForANumber() {
  var number = prompt("Give me a number");
  number = parseInt(number);
  
  return number;
}


function tellTheUserAMessage(message, numberToSend) {
  alert(message);
  numberToSend++;
  console.log(numberToSend);
  numberToSend += 10;
  alert(numberToSend);

  return numberToSend;
}

var response = tellTheUserAMessage("Banana",5);
console.log(response);


// var number = askUserForANumber();
// console.log(number);

//console.log(askUserForANumber());

// Vinicio - function execution
//askUserIfTheyLikePizza();




// If the user likes pizza. he/she has to buy me some. If not, they have to go away from my sight

// if (doesUserLikePizza === true) {
//   console.log('Great. Buy me some artesanal pizza');
// } else {
//   console.log('oh.. :(');
// }

// var name = prompt('What is your name');

// if (name === 'kali') {

//   console.log('You are the best doggo!');

// } else if(name === 'ginger'){

//   console.log('You are the second best doggo! (almost as cute as kali though)');

// } else if(doesUserLikePizza === true) {

//   console.log('Great. Buy me some artesanal pizza');

//  } else {

//   console.log('oh.. :(');
//  }

// Vinicio - this will be a separate chain from next if
// if (name === 'kali') {
//   console.log('You are the best doggo!');
// } 

// if(name === 'ginger'){
//   console.log('You are the second best doggo! (almost as cute as kali though)');
// }

// if(doesUserLikePizza === true) {
//   console.log('Great. Buy me some artesanal pizza');
//  } else {
//   console.log('oh.. :(');
//  }
// var names = ['Jon', 'Dany', 'Robert', 'Jorah'];

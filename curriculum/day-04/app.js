'use strict'; // return true; return false;

function findInArray() {
  var arrayOfNames = ['kali', 'khal', 'gregor','hound'];

  var name = '';
  var turnsLeft = 4;
  while(turnsLeft > 0) {
    //-----------------------------------------------------
    name = prompt('give me a name');
    turnsLeft--;
    //-----------------------------------------------------
    for(var index = 0; index < arrayOfNames.length; index++) {
      if(arrayOfNames[index] === name) {
        alert('The north remembers :D');
        return true;
      } 
    }
    // Finding invariants - What can I ALWAYS assume about this part of the code
    alert('Wrong guess :(. Please try again')
  }
  alert('You know nothing. Jon Snow')
  return false; // I don't really want this to happen until the player has used all his/her chances?
}

console.log(findInArray());

// 1
// create an array
// the images will be constructors
// cycle through the array and select random pictures

// 2.5

// 5
var goatStorage = [];
var randomGoats = [];
var clickCounter = 0;
var MAX_CLICK_COUNTER = 10;

function getRandomGoatIndex() {
  return Math.floor(Math.random() * (goatStorage.length));
}

function select3GoatsAndRender() {
  // select 3 goats :p
  // we need a loop to select numbers
  randomGoats = [];

  // -----------------------------------------------------------------------
  // Selecting 3 random indices
  // -----------------------------------------------------------------------
  while(randomGoats.length < 3) {
    var nextRandomValue = getRandomGoatIndex();

    if(!randomGoats.includes(nextRandomValue)) {
      randomGoats.push(nextRandomValue);
    }  
  }
  // -----------------------------------------------------------------------
  // render the goats :D - This is a great place to increase your times shown ;)
  var placeholder0 = document.getElementById('placeholder-0');
  var placeholder1 = document.getElementById('placeholder-1');
  var placeholder2 = document.getElementById('placeholder-2');
  // Invariants:
  // randomGoats has 3 goats!

  goatStorage[randomGoats[0]].render(placeholder0);
  goatStorage[randomGoats[1]].render(placeholder1);
  goatStorage[randomGoats[2]].render(placeholder2);
}


var Goat = function(name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timesShown = 0; // hint hint ;). You may need to use this for your app ;)

  this.markClick = function() {
    this.timesClicked++;
  }

  this.render = function(domReference) {
    domReference.src = picture;
  }
  goatStorage.push(this);
}

var sweaterGoat = new Goat('Sweater Goat', './images/sweater-goat.jpg');
var cruisingGoat = new Goat('Cruising Goat', './images/cruisin-goat.jpg')
var floatYourGoat = new Goat('Float your Goat', './images/float-your-goat.jpg')
var kissingGoat = new Goat('Kissing Goat', './images/kissing-goat.jpg')


function clickManager (event) {
  clickCounter++;
  if(clickCounter < MAX_CLICK_COUNTER) {
    var goatIndex;

    if(event.target.id === 'placeholder-0') {
      goatIndex = 0;
    } else if (event.target.id === 'placeholder-1') {
      goatIndex = 1;
    } else {
      goatIndex = 2;
    }
    var clickedGoat = goatStorage[randomGoats[goatIndex]];
    clickedGoat.markClick();

    select3GoatsAndRender();
  } else {
    alert('game over');
  }



  // I know the id of the clicked picture
  // I know I have an array called randomGoats with the randomly selected goats
  // I know I have an array called goatStorage with all the goats
  // I know that I can do goatStorage[randomGoats[...]] to select a specific goat

}


select3GoatsAndRender();

var placeholder0 = document.getElementById('placeholder-0');
var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');

placeholder0.addEventListener('click', clickManager);
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);


//  have a temporary array to keep track of currently selecte values ---> this is how I do it :D  ---> this is the way to go ;), but I'm going to leave this for lab

// keep track of the one's the user has voted

// Event listeners for the pictures and for anything that's not a picture

// create a loop for 25 iterations
// at the end, show the list




// Tasks 
// Picture Constructor
  // Name
  // Piture
  // Adding pictures in global array
  // Render function for constructor
// Select 3 pictures from the array
    // Select a random number
    // Check that the number is unique
  // Render the 3 pictures in the slot














 


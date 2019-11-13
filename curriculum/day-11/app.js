// 1
// create an array
// the images will be constructors
// cycle through the array and select random pictures

// 2.5

// 5
localStorage.setItem('user', 'kali');
localStorage.setItem('userIsCute', 'true');
var GOAT_DATA = 'goatData';

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
  // -----------------------------------------------------------------------------------
  // This information is what you want to preserve. It'll be absolutely lost
  // -----------------------------------------------------------------------------------
  this.timesClicked = 0;
  this.timesShown = 0; 
  // -----------------------------------------------------------------------------------

  this.markClick = function() {
    this.timesClicked++;
  }

  this.render = function(domReference) {
    domReference.src = this.picture;
  }

  this.loadData = function(data) {
    // Vinicio - JSON data has to be a pre-parsed object
    this.timesClicked = data.timesClicked;
    this.timesShown = data.timesShown;

    // Vinicio - we don't have to do this, but I think it's safer to restore everything
    this.name = data.name;
    this.picture = data.picture;
  }
}

// ----------------------------------------------------------------------
// LOCAL STORAGE
// ----------------------------------------------------------------------
// Vinicio - this is what should happen if we don't have anything in local storage
if(localStorage.getItem(GOAT_DATA) === null) {
  // Vinicio - if there is nothing in local storage, we need to create the goats like normal
  var sweaterGoat = new Goat('Sweater Goat', './images/sweater-goat.jpg');
  var cruisingGoat = new Goat('Cruising Goat', './images/cruisin-goat.jpg')
  var floatYourGoat = new Goat('Float your Goat', './images/float-your-goat.jpg')
  var kissingGoat = new Goat('Kissing Goat', './images/kissing-goat.jpg')

  goatStorage.push(sweaterGoat);
  goatStorage.push(cruisingGoat);
  goatStorage.push(floatYourGoat);
  goatStorage.push(kissingGoat);
} else {
  var jsonData = localStorage.getItem(GOAT_DATA);
  var data = JSON.parse(jsonData);

  for(var i = 0; i < data.length; i++) {
    var newGoat = new Goat('','');

    newGoat.loadData(data[i]);
    goatStorage.push(newGoat);
  }
}


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
    // Biggest change of the day
    saveGoatDataToLocalStorage();
    createGoatChart();
  }

  function saveGoatDataToLocalStorage() {
    var jsonData = JSON.stringify(goatStorage);
    // Vinicio - this is the line that's putting things into local storage
    localStorage.setItem(GOAT_DATA, jsonData);
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

function createGoatChart() {
  var nameArray = [];
  var clickArray = [];

  for(var i = 0; i < goatStorage.length; i++) {
    nameArray.push(goatStorage[i].name);
    clickArray.push(goatStorage[i].timesClicked);
  }


  // vinicio - I want to draw 2d graphics into this canvas
  var context = document.getElementById('chart').getContext('2d');
  var goatChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [
        {
          label: 'Goat Clicks',
          data: clickArray,
          backgroundColor: 'rgb(255,99,132)',
          borderColor: 'rgb(255,99,132)',
        },
        {
          label: 'Goat Clicks',
          data: clickArray,
        }
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            }
          },
        ],
      }
    },
  });
}
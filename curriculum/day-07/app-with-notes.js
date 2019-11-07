'use strict'; 

function Animal(name, barksPerWeek, weight) {
  this.name = name;
  this.barksPerWeek = barksPerWeek;
  this.weight = weight;

  this.render = function(domReference) {
    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.append(tdName);

    for(var barkIndex = 0; barkIndex < this.barksPerWeek.length; barkIndex++) {
      var td = document.createElement('td');

      td.textContent = this.barksPerWeek[barkIndex];
      tr.append(td);
    }
    td = document.createElement('td');
    td.textContent = 'total';
    tr.append(td);

    domReference.append(tr);
  }
}
// --------------------------------------------------------------------------------
// PRE-MADE ANIMALS
// --------------------------------------------------------------------------------
var kali = new Animal('Kali', [10,12,23, 5], '60 lbs');
var khal = new Animal('Khal', [0,100,0, 5], '7 lbs');
var ginger = new Animal('Ginger', [1,1,2, 5], '25 lbs');
var gregor = new Animal('Gregor', [12 , 1, 2, 5], '10 lbs');
// --------------------------------------------------------------------------------
var animals = [kali, khal, ginger, gregor];
// --------------------------------------------------------------------------------


// Vinicio - this function is calculating vertical totals
function calculateAndRenderTotals(animals) {
  for(var barkIndex = 0; barkIndex < animals[0].barksPerWeek.length; barkIndex++) {
    var total = 0;
    for(var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
      total += animals[animalIndex].barksPerWeek[barkIndex];
    }
    console.log(`total ${total}`);
  }
}

function renderDaysOfTheWeek(domReference) {
  var daysOfTheWeek = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Total ;)'];

  var tr = document.createElement('tr');

  for(var day = 0; day < daysOfTheWeek.length; day++) {
    var th = document.createElement('th');

    th.textContent = daysOfTheWeek[day];

    tr.append(th);
  }
  domReference.append(tr);
}

function cleanScreenAndRenderAll(){

  var tableReference = document.getElementById('dog-table');
  tableReference.innerHTML = "";
  renderDaysOfTheWeek(tableReference);
  calculateAndRenderTotals(animals);

  for(var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
    var currentAnimal = animals[animalIndex];

    currentAnimal.render(tableReference);


  } 
}
//-------------------------------------------------------------------------------
// FORMS
//-------------------------------------------------------------------------------

// Vinicio - get a reference to the DOM
var form = document.getElementById('animal-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Vincio - don't reload
  var newAnimal = new Animal(event.target.name.value, [0,0,0,0], event.target.weight.value);
  animals.push(newAnimal);
  cleanScreenAndRenderAll();
});

cleanScreenAndRenderAll();
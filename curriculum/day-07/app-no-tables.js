'use strict'; 

function Animal(name, barksPerWeek, weight) {
  // VInicio - everytime I do this. I'm adding a copy of something into 'newborn' object
  this.name = name;
  this.barksPerWeek = barksPerWeek;
  this.weight = weight;

  this.renderBarks = function(domReference) {
    for(var barkIndex = 0; barkIndex < this.barksPerWeek.length; barkIndex++) {
      var barkParagraph = document.createElement('p');

      barkParagraph.textContent = this.barksPerWeek[barkIndex];
      domReference.append(barkParagraph);
    }
  }

  this.renderName = function(domReference) {
    var paragrah = document.createElement('p');

    paragrah.textContent = this.name;
    domReference.append(paragrah);
  }

  this.render = function(domReference) {
    // Vinicio - what is domReference? - A an anchor to the dom, that I can use to render things

    this.renderName(domReference);
    this.renderBarks(domReference);
  }
  // VInicio - javascript will do this for you if you call your function with new
  // return this;
}

var kali = new Animal('Kali', [10,12,23], '60 lbs');
var khal = new Animal('Khal', [0,100,0], '7 lbs');
var ginger = new Animal('Ginger', [1,1,2], '25 lbs');
 
var domReference = document.getElementById('dog-data');
var animals = [kali, khal, ginger];

for(var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
  var currentAnimal = animals[animalIndex];

  currentAnimal.render(domReference);
  // store.render();
} 


function renderDaysOfTheWeek(domReference) {
  // <tr> - :)
  //   <th> Header 1</th> :)
  //   <th> Header 2</th> :)
  //   <th> Header 3</th> :)
  // </tr> :)
  var daysOfTheWeek = ['','Monday', 'Tuesday', 'Wednesday'];

  var tr = document.createElement('tr');

  for(var day = 0; day < daysOfTheWeek.length; day++) {
    var th = document.createElement('th');

    th.textContent = daysOfTheWeek[day];

    tr.append(th);
  }
  domReference.append(tr);
}

// Connect to the table

var tableReference = document.getElementById('dog-table');

renderDaysOfTheWeek(tableReference);





// I want something to happen WHEN the users clicks my button

// Chrome will call something we know as en event whenever SOMETHING happens

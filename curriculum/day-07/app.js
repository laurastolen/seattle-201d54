'use strict'; 

function Animal(name, barksPerWeek, weight) {
  // VInicio - everytime I do this. I'm adding a copy of something into 'newborn' object
  this.name = name;
  this.barksPerWeek = barksPerWeek;
  this.weight = weight;

      // <tr> :)
      //   <td> NAME </td>
      //   <td> VALUE</td> :)
      //   <td> VALUE</td> :)
      //   <td> VALUE</td> :)
      // </tr> :)

  this.render = function(domReference) {
    // Vinicio - what is domReference? - A an anchor to the dom, that I can use to render things

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

    // Please don't add code here for the hourly totals
  }
  // VInicio - javascript will do this for you if you call your function with new
  // return this;
}

var kali = new Animal('Kali', [10,12,23], '60 lbs');
var khal = new Animal('Khal', [0,100,0], '7 lbs');
var ginger = new Animal('Ginger', [1,1,2], '25 lbs');
 
var animals = [kali, khal, ginger];


function calculateHourlyTotal(animals) {

}


function renderDaysOfTheWeek(domReference) {
  // <tr> - :)
  //   <th> Header 1</th> :)
  //   <th> Header 2</th> :)
  //   <th> Header 3</th> :)
  // </tr> :)
  var daysOfTheWeek = ['','Monday', 'Tuesday', 'Wednesday', 'Total ;)'];

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

// DAYS
renderDaysOfTheWeek(tableReference);

//ANIMALS
for(var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
  var currentAnimal = animals[animalIndex];

  currentAnimal.render(tableReference);
} 



// Render the days of the week
// Render the dogs name and its barks in the same rowe
// go to the next dog

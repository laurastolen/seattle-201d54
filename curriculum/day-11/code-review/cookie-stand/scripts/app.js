'use strict';


var hoursOpen = ['', '6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

var seattle = new City('Seattle', [23,65,6.3]);
var tokyo = new City('Tokyo', [3,24,1.2]);
var dubai = new City('Dubai', [11,38,3.7]);
var paris = new City('Paris', [20,38,3.7]);
var lima = new City('Lima', [2,6,4.6]);

var cities = [seattle, tokyo, dubai, paris, lima];
var citiesHourlyTotals = ['Total',];
var totalCookiesEver = 0;

function City(name, cookiesData) {
  this.name = name;
  this.cookiesData = cookiesData;

  this.minCustomers = this.cookiesData[0];
  this.maxCustomers = this.cookiesData[1];
  this.avgCustomers = this.cookiesData[2];

  this.averagePerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerHour = 0;

  this.produceRandomHours = function(){
    var totalCookies = 0;

    // VInicio - let's remember that the array starts at ''
    for (var hoursOpenIndex = 0; hoursOpenIndex < hoursOpen.length - 1; hoursOpenIndex++) {
      // Vinicio - I would separate this to another function
      var randomInteger = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;

      this.cookiesPerHour.push(randomInteger);

      var averagePerHour = this.avgCustomers * randomInteger;
      this.averagePerHour.push(averagePerHour);

      totalCookies += randomInteger;
    }
    this.totalCookiesPerHour = totalCookies;
  }

  this.renderHourly = function(tableDomReference) {
    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.append(tdName);

    // Vinicio - this could be renamed as cookieIndex

    // Jerome - we substract one to cookiesPerHour.length because we have an extra element
    // in the array
    for(var cityIndex = 0; cityIndex < this.cookiesPerHour.length - 1; cityIndex++) {
      var td = document.createElement('td');
      td.textContent = this.cookiesPerHour[cityIndex];
      tr.append(td);
    }

    var tdTotal = document.createElement('td');
    tdTotal = this.totalCookiesPerHour;
    tr.append(tdTotal);

    tableDomReference.append(tr);
  }
}

function calculateHourlyTotal() {
  var totalHours = cities[0].cookiesPerHour.length - 1
  var totalCities = cities.length

  for(var hourIndex = 0; hourIndex < totalHours; hourIndex++){
    var total = 0;
    for(var cityIndex = 0; cityIndex < totalCities; cityIndex++){
      total += cities[cityIndex].cookiesPerHour[hourIndex];
    }
    // Vinicio - why do we do a +1 
    citiesHourlyTotals[hourIndex + 1] = total;
    totalCookiesEver = totalCookiesEver + total;
  }
}

function renderHourlyTotals(tableDomReference) {
  var tr = document.createElement('tr');
  var tdTotal = document.createElement('td');
  tdTotal.textContent = '';
  tr.append(tdTotal);

  for (var totalsIndex = 0; totalsIndex < citiesHourlyTotals.length; totalsIndex++){
    var tdElement = document.createElement('td');
    tdElement.textContent = citiesHourlyTotals[totalsIndex];
    tr.append(tdElement);
  }

  tdTotal.textContent = totalCookiesEver;
  tr.append(tdTotal);
  tableDomReference.append(tr);
}

function renderHoursOpen(tableDomReference) {
  var tr = document.createElement('tr');

  for (var tdHour = 0; tdHour < hoursOpen.length; tdHour++) {
    var th = document.createElement('th');
    th.textContent = hoursOpen[tdHour];
    tr.append(th);
  }

  tableDomReference.append(tr);
}

for (var cityIndex = 0; cityIndex < cities.length; cityIndex++) {
  var currentCity = cities[cityIndex];
  currentCity.produceRandomHours();
}

var tableDomReference = document.getElementById('cookie-table');

renderHoursOpen(tableDomReference);

for(var citiesIndex = 0; citiesIndex < cities.length; citiesIndex++) {
  var currentCiti = cities[citiesIndex];
  currentCiti.renderHourly(tableDomReference);
}

calculateHourlyTotal();
renderHourlyTotals(tableDomReference);

function cleanScreenAndRenderAll(){
  tableDomReference.innerHTML = "";

  renderHoursOpen(tableDomReference);

  for (var citiesIndex = 0; citiesIndex < cities.length; citiesIndex++) {
    var newCity = cities[citiesIndex];
    newCity.renderHourly(tableDomReference);
  }

  calculateHourlyTotal();
  renderHourlyTotals(tableDomReference);
}

var form = document.getElementById('cookies-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var newCity = new City(
    event.target.name.value,
    [
      parseInt(event.target.minimum_sales.value),
      parseInt(event.target.maximum_sales.value),
      parseFloat(event.target.avg_per_sale.value)
    ]
  );

  newCity.produceRandomHours();
  cities.push(newCity);

  cleanScreenAndRenderAll();

  console.log(newCity)
  console.log(cities)
});

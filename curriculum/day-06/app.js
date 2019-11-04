'use strict'; 

// // for(var i = 0; i < 3; i++) {
// //   console.log(i);
// //   for(var x = 0; x < 30; x += 10) {
// //     console.log(x);
// //   }
// //   //console.log(x); // THis will print 30 because it's the valua that made the conditional break
// // }


// // console.log(barkData);
// // console.log(barkData[1][1]);
// // console.log(khalsNumbers[1]);

// // const KHAL_INDEX = 1;
// // const TUESDAY = 1;

// // console.log('Kali\'s numeber is ' + barkData[0][1] + '. And Khal\'s number is :' + barkData[KHAL_INDEX][TUESDAY]);
// // console.log(`Kali's number is ${barkData[0][1]}. And Khal's number is ${barkData[KHAL_INDEX][TUESDAY]}`);


// var names = ['kali', 'khal', 'ginger'];

// // Vinicio - I'm going to assume that the positions in the array start at 0 - Monday ; 1 - Tuesday ; ...
// var kalisNumbers = [10, 20, 15];
// var khalsNumbers = [0, 100, 0];
// var gingersNumbers = [5, 2, 1];

// var barkData = [kalisNumbers, khalsNumbers, gingersNumbers];
// var weekdays = ['Monday', 'Tuesday', 'Wednesday'];

// // Monday 
// // Tuesday
// // Wednesday
// // Kali 
// // 0 
// // 1 
// // 2
// // Khal 
// // 0 
// // 1 
// // 2
// // Ginger 
// // 0 
// // 1 
// // 2


// for(var i = 0; i < weekdays.length; i++) {
//   console.log(weekdays[i]);
// }

// for(var dogNamesIndex = 0; dogNamesIndex < names.length; dogNamesIndex++) {
//   console.log(names[dogNamesIndex]);

//   var rowLength = barkData[dogNamesIndex].length
//   for(var barkIndex =0 ; barkIndex < rowLength; barkIndex++) {
//     // Vinicio - Invariant - "Inside this loop, dogNamesIndex WILL NOT CHANGE"
//     // Vinicio - Invariant - "Inside this loop, barkIndex will increase by one in every iteration"
//     // console.log(`dogNamesIndex: ${dogNamesIndex}. barkIndex: ${barkIndex}`);
//     console.log(barkData[dogNamesIndex][barkIndex]);
//   }
//   // console.log(names[dogNamesIndex]);
//}

// Vinicio - object literals
var instantPotDuo = {
  // Vinicio - a variable inside an object is called a member variable
  name: 'Instant Pot Duo RED',
  price: 59.99,
  dimensions: '13.4 x 12.2 x 12.5 inches',
  ASIN: 'B07Q6HCHRT',
  dateFirstListed: 'July 15, 2019',
  // Vinicio - a function inside an object is called a method
  buyNow: function() {
    console.log(`${this.price} has been charged to your account`);
  },
  addToCart: function() {
    console.log(`${this.name} added to cart`);
  },
  cookRice: function() {
    console.log('Cooking!');
  }
};

var kali = {
  name:'kali',
  barksPerWeek: [10,12,23],
};


kali.cute = 'always';
console.log(kali.cute);

kali.bark = function() {
  console.log('woof');
}

kali.bark();

console.log(kali['cute']);

kali['is cute'] = true;
kali['is cute'];


var khal = {
  name:'khal',
  barksPerWeek: [0,100,0],
};

var ginger = {
  name:'ginger',
  barksPerWeek: [1,1,2],
};


// Vinicio - document is the DOM
// 1 - Find a reference in the DOM
var dogDataDiv = document.getElementById('dog-data');

// // 2 - Create elements we need to append to the DOM
// var paragraph = document.createElement('p');

// // 3 - Set their contents
// paragraph.textContent = 'Here are the doggos I like:';

// // 4 - add your elements to your DOM reference
// // 4 - a.k.a. add your elements to the DOM
// dogDataDiv.append(paragraph);

/* What do we want:
- Get a reference to the dom
- create elements with the dog names ? (maybe in a loop?)
- create elements with bark values ? (maybe in another loop right?) wink wink ;)
- append all of this to the DOM (maybe append as I go so I don't have to do it all at ance)
*/
var animals = [kali, khal, ginger];

for(var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
  var paragrah = document.createElement('p');

  var currentAnimal = animals[animalIndex];
  paragrah.textContent = currentAnimal.name;

  dogDataDiv.append(paragrah);

  for(var barkIndex = 0; barkIndex < currentAnimal.barksPerWeek.length; barkIndex++) {
    // Invarint - currentAnimal will NOT CHANGE inside this loop
    // invariant - barkIndex will CHANGE inside this loop 

    var barkParagraph = document.createElement('p');
    barkParagraph.textContent = currentAnimal.barksPerWeek[barkIndex];
    dogDataDiv.append(barkParagraph);
  }
} 

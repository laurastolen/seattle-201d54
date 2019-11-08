'use strict'; 


// function bug() {

//   function render() {
//     return 'rendering;'
//   }
//   return render();

//   function render() {
//     return 'oh boy :/';
//   }
// }
// function bug() {
//   function render() {
//     return 'rendering;'
//   }
//   return render();
//   function render() {
//     return 'oh boy :/';
//   }
// }

// Vinicio - avoid having big functions
// Vinicio - avoid having functions inside functions
// Vinicio - pick a style and be as consistent as you can
// function bug() {
//   var render = function () {
//     return 'rendering;'
//   }
//   return render();
//   render = function() {
//     return 'oh boy :/';
//   }

// }
//  console.log(bug());

// -----------------------------------------------------
// -----------------------------------------------------
// Function Expressions
// function functionWeird() {
//   var add = function(a, b) {
//     return a + b;
//   };
//   // Vinicio - BEFORE using a name, make sure the name
//   // has been PROPERLY defined
//   var result = add(5,6);
// }

// console.log(functionWeird());
// function functionWeird() {
//   var result = undefined;
//   var add = undefined;

//   result = add(5,6);
//   add = function(a, b) {
//     return a + b;
//   };

//   return result;
// }

// Function declaration
// function functionWeird() {
//   var result = add(5,6);

//   function add(a,b) {
//     return a + b;
//   }
//   return result;
// }

// console.log(functionWeird());

// function functionWeird() {
//   var result = undefined;

//   function add(a,b) {
//     return a + b;
//   }

//   result = add(5,6);
//   return result;
// }

// -----------------------------------------------------
// -----------------------------------------------------
// function function1() {
//   return kali;
//   var kali = 'is cute';
//   // var kali = undefined;
//   // return kali;
//   // kali = 'is cute';
// }

// console.log(function1());

// -----------------------------------------------------
// -----------------------------------------------------
// function1();

// function function1() {
//   console.log('test');
// }
// -----------------------------------------------------
// -----------------------------------------------------
// Vinicio - when javascript sees this
// console.log(pizza);
// var pizza = 'is yummy';

// Vinicio -  it actually executes this
// var pizza = undefined;
// console.log(pizza);
// pizza = 'is yummy';
// -----------------------------------------------------



function Cookie(name) {
  // Vinicio - hoisting happens when you try to do
  // perform 'complex behavior' INSIDE a constructor
  this.yummy = true;
  this.name = name;

  this.test = function() {

  }
  this.eat =  function() {
    this.test();
  }

  this.render = function() {
    this.eat();
    this.test();
  }
  // Vinicio - here is where you can try to do complicated work
  // Vinicio - after you have defined all the members
  // complicated - anything that's not just defining a member
}



var c1 = new Cookie();
c1.eat();
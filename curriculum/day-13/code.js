'use strict';

// function usesCallbacks(callbackFunction,number) {
// 	console.log('I am inside the usesCallbacks function');
// 	callbackFunction();

// }

// function Animal() {
// 	this.name = 'banana';

// 	// usesCallbacks(function() {
// 	// 		console.log('I am a callback function');
// 	// 		console.log(this.name);
// 	// },1);
// 	// usesCallbacks(() =>  {
// 	// 		console.log('I am a callback function');
// 	// 		console.log(this.name);
// 	// },1,this);
// };



// var animal = new Animal();



function banana() { // function: function scope
	if(1 === 1) { // block : block scope
		var variable = 'ten';
		let variableLet = 'ten';
	}

	console.log(variable);
	console.log(variableLet);
}

// function banana() { // function: function scope
// 	var variable = undefined;
// 	if(1 === 1) { 
// 		let variable = undefined;

// 		variable = 'ten';
// 		variableLet = 'ten';
// 	}

// 	console.log(variable);
// 	console.log(variableLet);
// }

banana();
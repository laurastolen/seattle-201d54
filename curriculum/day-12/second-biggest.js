'use strict';

function secondBiggest(array) {
	if(array.length < 2) {
		console.log('invalid array');
		return;
	}
	var biggest = Math.max(array[0], array[1]);
	var secondBiggest  = Math.min(array[0], array[1]);

	for(var i = 2; i < array.length; i++) {
		var currentValue = array[i];

		if(currentValue > biggest) {
			secondBiggest = biggest;
			biggest = currentValue;
		} else if (currentValue > secondBiggest) {
			secondBiggest = currentValue;
		}
	}
	return secondBiggest;
}

console.log(secondBiggest([6,7,78,8,8,7,7,6]));

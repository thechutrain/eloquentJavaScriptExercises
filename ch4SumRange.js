/* write a range function that takes two arguments,
the start and end --> returns an array containing all 
numbers including the last
*/

function Range(start, end, step){
	// if there is no given step, assume 1
	if (step == undefined){
		step = 1;
	}
	// create return array
	range_array = [];
	if (step > 0){
		for (var i = start; i <= end; i+=step){
			range_array.push(i);
		}
	} else {
		for (var i = start; i >= end; i+=step){
			range_array.push(i);
		}
	}
	// return or print the array
	// console.log(range_array);
	return range_array
}

function Sum(listOfNumbers){
	var total = 0;
	// loop through array
	while (listOfNumbers.length != 0){
		total += listOfNumbers.pop();
	}
	console.log("The total is for the given array is: " + total);
}

// testing
Sum(Range(1,10));
/* Make a recursive function that tests
if a positive whole number is even or odd.
Zero is even, One is odd, any Number the evenness is the
same as N - 2
*/

function isEven(number){
	// Validate - check if you are given a number
	if (isNaN(number)){
		console.log("please give us a number");
	} else if (number == 0){
		console.log("even");
	} else if (number == 1){
		console.log("odd");
	} else if (number >= 2){
	// assumes the number is greater than or equal to 2
		isEven(number - 2);
	} else {
		// assumes the number is a negative
		isEven(number + 2);
	}	
}

/* without checking to see if you have a negative number, you will
 get a "Maximum call stack size exceeded" error!
*/

// test to see if not a number works
isEven("ga");
// >"please give us a number"

isEven(10);
// > even

isEven(-11);
// >odd

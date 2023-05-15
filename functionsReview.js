//Functions
//console.log(add(1, 2)); //will run with no problem
//console.log(minus(3, 1)); // ReferenceError: Cannot access 'minus' before initialization
//function declaration, num and num2 are the parameters
function add(num, num2) {
	//local num num2
	return num + num2;
}

//calling/invoking -- 1, 2 are the arguments
// console.log(add(1, 2));

//function expression
const minus = function (num1, num2) {
	//local num num2
	return num1 - num2;
};
// console.log(minus(3, 2));

//fat arrow function
const multiply = (num, num2) => {
	return num * num2;
};

// console.log(multiply(2, 3));
//Hoisting- is Javascript mechanism where variables and function declarations are moved to the top of their scope
// Global - function add

//callbacks- a callback function is function that is passed into another function as an argument then its invoked inside
//higher order functions- is function that takes in one or more function as a parameter

const doMath = (n, n2, callback) => {
	console.log(callback(n, n2));
};

doMath(1, 3, multiply);

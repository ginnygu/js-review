// Array
let students = ["Robert", "George", "Lucy"];

//push- a method that takes in an argument and puts the item to the very end of the array. Mutates the original array
students.push("Melissa");
console.log(students); //[ 'Robert', 'George', 'Lucy', 'Melissa' ]

//pop- a method that removes the last item of the array. Mutates the original array
students.pop();
console.log(students); //[ 'Robert', 'George', 'Lucy' ]

//shift- a method that removes the first item of the array. Mutates the original array
students.shift();
console.log(students); //['George', 'Lucy' ]

//unshift- a method that takes in an argument and puts the item in the beginning of the array. Mutates the original array
students.unshift("Melissa");
console.log(students); // [ 'Melissa', 'George', 'Lucy' ]

//splice- Mutates the original array .splice(start, howMany)
students.splice(1); // without second argument, it will remove the rest and keep anything prior to index 1
console.log(students); // ['Melissa']

students.splice(1, 0, "Robert", "Lucy"); // will not remove anything and it will add Robert and Lucy after index 1
console.log(students);

students.splice(2, 1, "Gail"); // will replace second index item with Gail
console.log(students);

students.splice(0, 1); // will remove one from the beginning of list
console.log(students);

//slice- creates a shallow copy where it keeps a portion of the original array
let months = ["Jan", "Feb", "March", "April"];
let slicedMonths = months.slice(1); //keeps everything from index 1
console.log(months);
console.log(slicedMonths);

let keepBegMonths = months.slice(0, 2);
console.log(keepBegMonths);

// concat,join,split,reverse,includes,indexOf

//Higher order methods
//.forEach - iterates through the array and does something to each element. Will always run till the end
const forEachItems = months.forEach((elem, index, array) => {
	// if (index < 2) {
	// 	console.log(elem);
	// 	console.log(index);
	// 	console.log(array);
	// }
	return elem;
});
console.log(forEachItems);

//.map - creates a new array

const mappedItems = months.map((elem, index, array) => {
	return index + " " + elem;
});

console.log(mappedItems);

//.filter- creates a new array with items that matches a condition that is passed inside the callback function. Loops through all items

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNums = nums.filter((elem) => {
	return elem % 2 === 1;
});
console.log(oddNums);

//.find- returns the first item that matches the codition and stops the loop

const found = nums.find((elem) => {
	return elem % 2 === 1;
});

console.log(found);

//using map
const addOne = nums.map((num) => {
	return num + 1;
});
console.log(addOne);

//using forEach
let sum = 0;
nums.forEach((num) => {
	sum += num;
});
console.log(sum);

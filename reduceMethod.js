//.reduce((accumulator, currentValue)=>{}, initialValue)
// creating a new array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addOne = nums.reduce((acc, currentV) => {
	let newNum = currentV + 1;
	acc.push(newNum);
	return acc;
}, []);

console.log(addOne);

//creating a sum
const sum = nums.reduce((acc, currentV) => {
	return (acc += currentV);
}, 0);

console.log(sum);

//creating a new object

const people = [
	{ name: "John", job: "Software Engineer" },
	{ name: "Lucy", job: "Data Science" },
	{ name: "Melissa", job: "Product Manager" },
	{ name: "George", job: "Software Engineer" },
	{ name: "Ginny", job: "Cashier" },
];

// const basedOnJobs = people.reduce((acc, currentV) => {
// 	if (currentV.job === "Software Engineer" && !acc[currentV.job]) {
// 		acc[currentV.job] = [];
// 		// acc["Software Engineer"].push(currentV.name);
// 	}
// 	if (currentV.job === "Data Science" && !acc[currentV.job]) {
// 		acc[currentV.job] = [];
// 	}
// 	if (currentV.job === "Product Manager" && !acc[currentV.job]) {
// 		acc[currentV.job] = [];
// 	}
// 	acc[currentV.job].push(currentV.name);
// 	return acc;
// }, {});

const basedOnJobs = people.reduce((acc, currValue) => {
	if (!acc[currValue.job]) {
		acc[currValue.job] = [];
	}
	acc[currValue.job].push(currValue.name);
	return acc;
}, {});

console.log(basedOnJobs);

//  {
//     'Software Engineer': [ 'John', 'George' ],
//     'Data Science': [ 'Lucy' ],
//     'Product Manager': [ 'Melissa' ]
//   }

let arrVar = [1, 2, 3, 4, 5, 6];
//for loop - for(initial expression; condition; increment expression){ statement of what you want to do}
for (let i = arrVar.length - 1; i >= 0; i--) {
	console.log(arrVar[i]);
}

for (let i = 0; i < arrVar.length; i++) {
	console.log(arrVar[i]);
}

//while loop- usually used when you don't know the exact iteration of something

let i = 0;

while (i < arrVar.length) {
	console.log("while", arrVar[i]);
	i++;
}

let j = 6;
while (j < arrVar.length) {
	// this will not run
	console.log("while", arrVar[j]);
	j++;
}

//do...while loop
let k = 5;
do {
	console.log(k);
	console.log("do... while", arrVar[k]);
	k++;
} while (k < arrVar.length);

//for...of loop iterates till the end
for (elem of arrVar) {
	console.log("for...of", elem);
}

let string = "Hello World";

for (s of string) {
	console.log(s);
}

//for...in mainly used to iterate through objects. This will iterate till the end
let obj = {
	a: 1,
	b: 2,
	c: 3,
};
obj.a; // 1
obj["a"]; // 1

for (key in obj) {
	if (key === "a") {
		console.log("key", key);
		console.log("value", obj[key]);
	}
}

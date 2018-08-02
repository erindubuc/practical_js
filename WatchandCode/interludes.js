// Here are the functions that we practiced in interludes...

function logTenNumbers () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

runWithDebugger (function logTenNumbers() {
for (var i= 0; i < 10; i++) {
console.log(i);
}
});

// creates an alarm clock
setTimeout(function() {
	console.log('Wake up Gordon!');}, 5000)
	
// run a function on every array forEach enhances a function by 
// running it on every item on an array

var students = ['jonathoan', 'jenny', 'elliot'];

function forEach(myArray, myFunction) {
	for (var i = 0; i < myArray.length; i++) {
	myFunction(myArray[i]);
}
}
forEach(students, function(student) {
	console.log(student);
})

forEach(students, logName)

// addEventListener = has an event happen as a result of another event
var tutorialsElement = $0;

tutorialsElement.addEventListener('click', function() {
	console.log('The tutorials element was clicked');
});

tutorialsElement.addEventListener('click', function(event) {
	console.log(event);
	console.log('The tutorials element was clicked');
});
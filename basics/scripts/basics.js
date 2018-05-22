// Variables
var myString = 'Jun';
var myNumber = 27;
var myBoolean = true;
var myArray = ['Jun', 27, true];
var myObject = 'Everything in JavaScript is an object';

// Operators
myString = 'J' + 'un'; // string concatenation
myNumber = 3 * 9 // stores 27
myNumber === 27; // '===' is used for equality. Returns true/false result.
myNumber !== 27; // does not equal. Returns false in this case.

// Conditionals
var myName = 'Jun';
if (myName === 'Jun') {
    alert('That\'s right! My name is Jun.');
} else {
    alert('Awwww, that\'s not my name.');
}

// Functions
function pow(base, exponent) {
    var result = base ** exponent;
    return result;
}

pow(3, 5) // returns 243
pow(4, 2) // returns 16
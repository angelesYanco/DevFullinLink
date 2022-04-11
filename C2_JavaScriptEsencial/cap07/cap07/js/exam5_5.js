"use strict"

var a = 5;
var b = 12;
var c = 4;

console.log('exam5_5');

if ((b > c) && !(c < a)){
    console.log('Se ejecuto la primera condición');
} else if (!(b >= a) && (c > !b)){
    console.log('Se ejecuto la segunda condición');
} else {
    console.log('Se ejecuto el ultimo "else"');
}
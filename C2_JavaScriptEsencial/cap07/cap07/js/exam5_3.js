"use strict"

var a = 9;
var b = 5;
var c = 15;

console.log('exam5_3');

if((b > c) || !(a > c) && (b >= a)){
    console.log('Se ejecuto la primera condición');
} 

if((c > b) || !(c > a) && (a >= b)){
    console.log('Se ejecutó la segunda opción');
}
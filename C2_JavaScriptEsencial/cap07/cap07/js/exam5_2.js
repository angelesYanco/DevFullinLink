"use strict"

var a = 5;
var b = 12;
var c = 4;

console.log('exam5_2');

if((b > c) && (c > a) || !(b >= a)){
    console.log('Se ejecuto la primera opción');
}else{
    console.log('No se ejecuto la primera opción');
}

if((a <= b) || !(c < a) && (c < b)){
    console.log('Se ejecuto la segunda condición');
}else {
    console.log('No se ejecuto la sgunda condición');
}
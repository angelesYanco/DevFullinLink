"use strict"

//var productos = 5;
// var contador = 0;
// var cuenta = 0;

//Exam var
var y = 5;
var texto = "";

//Exam code
do{
    for(let x = 0; x < y; x++){
        texto = texto + "*";
    }
    console.log(texto);
    texto = "";
    y--;
}while(y > 0);

//4
// for(contador = 0; contador <= 20; contador++){
//     if(contador == 5){
//         break;
//     }
//     if(contador % 2 == 0){
//         continue;
//     }
//     cuenta++;
//     debugger;
// }
//console.log('Hay ' + cuenta + ' números impares');

//3
// do{
//     console.log('Producto vendido')
//     productos--;
//     debugger;
// }while(productos >= 1)

//2
// while(productos > 0){
//     console.log('Producto vendido')
//     productos--;
//     debugger;
// }

//1
// for(let contador = 0; contador < productos; contador++){
//     console.log('Producto #' + contador);
//     debugger;
// }
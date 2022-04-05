"use strict"

/* 1. Estreuctura basica de una función */
function saludar(){
    var saludo = "Hola Toño";
    console.log(saludo)
}
// saludar();

/* 2. Parámetros de una función */
function saludarParametro(nombre, edad){
    console.log("Hola: " + nombre);
    console.log("Edad: " + edad);
}
// saludarParametro("Toñito", 51);
// var mensaje = saludarParametro("Karen", 32);
// console.log(mensaje);

/* 3. Inicializacion de un parámetro */
function contar(cantidad=10){
    console.log('Total: '+cantidad);
}
// contar();
// contar(111);

/* 4.Parámetros tipo REST */
//function cocinar(ingrediente1, ingrediente2, ...masIngredientes){
function cocinarREST(...masIngredientes){
    // console.log('Ingrediente1: ' + ingrediente1);
    // console.log('Ingrediente2: ' + ingrediente2);
    console.log('Mas ingredientes: ' + masIngredientes);
}
//cocinar("pollo","tomate", "ajo", "sal","papas")

/* 5. Parámetros SPREAD */
//function cocinarSPREAD(ingrediente1, ingrediente2, ingrediente3){
function cocinarSPREAD(ingrediente1, ingrediente2, ingrediente3, ...otros){
    console.log('Ingrediente1: ' + ingrediente1);
    console.log('Ingrediente2: ' + ingrediente2);
    console.log('Ingrediente3: ' + ingrediente3);
    console.log('Otros: ' + otros)
}
// var ingredientesBase = ["pollo", "tomate"];
// //cocinarSPREAD(...ingredientesBase, "arroz");
// cocinarSPREAD(...ingredientesBase, "arroz", "pescado", "chile", "ajo");

/* 6. Funciones anónimas en JavaScript */
// (
//     function(){
//         var mensaje = "Hola de nuevo";
//         console.log(mensaje);
//     }
// )()

var saludar = function(){
    var mensaje = "Hola de nuevo";
    return mensaje;
}

var saludarNombre = function(nombre){
    var mensaje = "Hola " + nombre;
    return mensaje;
}

/* 7. En tendiendo los Callbacks */
function calcular(datoA, datoB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;
}

calcular(2, 3) 

function calcularCB(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

//Descripcion del ejemplo: calcularCB(valor1, valor2, func, func)
// calcularCB(2, 3, function(resultado){
//     console.log('Suma: ', resultado)
// },function(resultado){
//     console.log('Resta: ' + resultado)
// })

/* 8. Funciones arrow */
var saludar = nombre => "Hola " + nombre;
//console.log(saludar("Susana"));

var sumar = cantidad => cantidad + 10;
//console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB;
//console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
//console.log(generar(10, 15));

var validar = () => {
    return 'Validación correcta';
}
//console.log(validar());

/* 9. Uso del operador this */

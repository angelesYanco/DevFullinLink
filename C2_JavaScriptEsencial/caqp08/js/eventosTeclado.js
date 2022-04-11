"use strict"

//Eventos del teclado

//keydown
//keypress
//keyup

//event

window.addEventListener('keydown', function(event){
    console.log('Pulsando tecla: ' + event.keyCode);
    console.log(String.fromCharCode(event.keyCode));
})

window.addEventListener('keypress', function(){
    console.log('Tecla pulsada');
})

window.addEventListener('keyup', function(){
    console.log('Tecla liberada');
})

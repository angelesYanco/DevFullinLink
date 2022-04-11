"use strict"

// Eventos multimedia
//play
//seeking
//ended

const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function(){
    console.log('El video ha iniciado')
})

video.addEventListener('seeking', function(){
    console.log('Se esta buscando en el video', this.currenTime);
})

video.addEventListener('ended', function(){
    console.log('El video ha terminado');
})
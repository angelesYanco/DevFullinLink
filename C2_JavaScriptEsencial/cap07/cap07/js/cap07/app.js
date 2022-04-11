"use strict"

/* 9. Uso del operador this */
const boton = document.querySelector('.boton');

// boton.addEventListener('click', function(){
//     console.log(this.innerHTML);
// })

boton.addEventListener('click', () => {
    console.log(this);
    this.location = "http://porrua.com"
})
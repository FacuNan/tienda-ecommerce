import { consolasService } from "../service/consolasService.js";
import { juegosSevice } from "../service/service.js";
import { variadosService } from "../service/variadosService.js";

const modalC = document.querySelector('[data-form]');
const agregar = document.querySelector('[data-agregar]');
const modalA = document.querySelector('[data-modalA]');
const cerrar = document.querySelector('[data-cerrar]')


agregar.addEventListener('click', (e) => {
    e.preventDefault();
    modalA.classList.toggle('modal-clos')
    modalC.style.visibility = "visible";
    modalC.style.opacity = "1"


})

cerrar.addEventListener('click', () => {

    modalA.classList.add("modal-clos");
    setTimeout(() => {
        modalC.style.opacity = "0"
        modalC.style.visibility = "hidden"

    }, 900)


})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const img = document.querySelector('[data-imagen]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const link = document.querySelector('[data-descripcion]').value;

    const inputJuego = document.querySelector('#juego');
    const inputConsolas = document.querySelector('#consola');
    const inputVariados = document.querySelector('#variado');

    if (inputJuego.checked) {
        juegosSevice.agregarJuego(img, nombre, precio, link).then(() => {
            window.location.href = 'http://127.0.0.1:5500/index.html'
        })

    }else if(inputConsolas.checked){
      consolasService.agregarConsolas(img, nombre, precio, link).then(() => {
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
    }else{
        variadosService.agregarVariado(img, nombre, precio, link).then(()=>{
            window.location.href = 'http://127.0.0.1:5500/index.html'
        })
    }
   
})










import { juegosSevice } from "../service/service.js";
//constantes generales para los modales//
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];


//funcion que agrega el contenido al modal//
const agregarContenido = (id, img, nombre, precio, link) => {

    //div que contiene el contenido
    const divContenido = document.createElement('div')
    divContenido.classList.add('contenido')

    //contenido del modal
    const cont = `
    <p class="close">X</p>
    <img src="${img}" alt="">
    <h2>${nombre}</h2>
    <p>${precio}</p>
    <p>${link}</p>
   `

    divContenido.innerHTML = cont;
    //Se agregar el div que contiene el contenido al div.modal del html
    modal.appendChild(divContenido);

    //Metodo que cierra el formulario
    let cerrar = divContenido.querySelector('.close');
    cerrar.addEventListener('click', () => {

        modal.classList.add("modal-close");
        setTimeout(() => {
            modalC.style.opacity = "0"
            modalC.style.visibility = "hidden"
            modal.innerHTML = '';

        }, 900)


    })


}





export const obtenerJuegos = (id, img, nombre, precio, link) => {
    const articulo = document.createElement('article')

    articulo.classList.add('articulos')
    const contenido = `
    
    <img class="populares__img" src="${img}" alt="">
    <p class="productos">${nombre}</p>
    <p><strong>${precio}</strong>
    </p>
    <a href="#" class="ver-mas act" id="${id}">Ver Producto</a>
`


    articulo.innerHTML = contenido

    const nombres = articulo.querySelectorAll('.act');

    nombres.forEach((btn) => {
        btn.addEventListener('click', () => {
            const ides = btn.id
            juegosSevice.detallesJuego(ides).then(({ id, img, nombre, precio, link }) => {
                agregarContenido(id, img, nombre, precio, link)
            })
        })
    })


    //funcionalidad del boton de buscar//
    const buscador = document.querySelector('.buscador')
    buscador.addEventListener("keyup", e => {
        const respuesta = e.target.value

        if (e.key) {
            document.querySelectorAll('.productos').forEach(elemento => {
                elemento.textContent.toLowerCase().includes(respuesta.toLowerCase())
                    ? elemento.parentElement.style.display = 'block'
                    : elemento.parentElement.style.display = 'none'
            })

        }
    })


    //abrir Modal
    let abrir = articulo.querySelectorAll('.ver-mas')
    abrir.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalC.style.opacity = "1"
            modalC.style.visibility = "visible"
            modal.classList.toggle("modal-close");
        })
    })

   
    return articulo

}


const juegos = document.querySelector('[data-juegos]')

juegosSevice.listaJuegos().then((starwars) => {
    starwars.forEach(({ id, img, nombre, precio, link }) => {
        const agregarJuego = obtenerJuegos(id, img, nombre, precio, link)

        juegos.appendChild(agregarJuego)

    })
})



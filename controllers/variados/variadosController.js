import { variadosService } from "../../service/variadosService.js";

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


const agregarVariado = (id, img, nombre, precio, link) => {

    const articulo = document.createElement('article');
    articulo.classList.add('variados')


    const contenido = `
    <article class="variado">

    <img class="populares__img" src="${img}">
        <p class="productos">${nombre}</p>
        <p><strong>${precio}</strong>
        </p>
        <a href="" class="ver-mas act" id="${id}">Ver Producto</a>
    </article>`

    articulo.innerHTML = contenido

    const nombres = articulo.querySelectorAll('.act');

    nombres.forEach((btn) => {
        btn.addEventListener('click', () => {
            const ides = btn.id
            variadosService.detallesVariados(ides).then(({ id, img, nombre, precio, link }) => {
                agregarContenido(id, img, nombre, precio, link)
            })
        })
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


variadosService.listaVariados().then((data) => {
    data.forEach(({ id, img, nombre, precio, link }) => {
        const informacion = agregarVariado(id, img, nombre, precio, link);
        const divVariados = document.querySelector('[data-variados]');

        divVariados.appendChild(informacion)
    })
})
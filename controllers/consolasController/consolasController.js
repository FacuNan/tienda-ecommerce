import { consolasService } from "../../service/consolasService.js";
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

const infoConsolas = (id, img, nombre, precio, link) => {
    const articulo = document.createElement('article')

    articulo.classList.add('articulos');

    const contenido = `
    <img class="populares__img" src="${img}">
    <p class="productos">${nombre}</p>
    <p><strong>${precio}</strong>
    </p>
    <a href="${link}" class="ver-mas" id="${id}">Ver Producto</a>
   `

    articulo.innerHTML = contenido

    const nombres = articulo.querySelectorAll('.ver-mas');

    nombres.forEach((btn) => {

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const ides = btn.id
            consolasService.detallesConsolas(ides).then(({ id, img, nombre, precio, link }) => {

                agregarContenido(id, img, nombre, precio, link)
            })

        })
    })


    const buscador = document.querySelector('.buscador')

    buscador.addEventListener("keyup", e => {

        const respuesta = e.target.value

        console.log(respuesta)
        if (e.key) {
            document.querySelectorAll('.productos').forEach(elemento => {
                elemento.textContent.toLowerCase().includes(respuesta.toLowerCase())
                    ? elemento.parentElement.style.display = 'block'
                    : elemento.parentElement.style.display = 'none'

            })

        }
    })

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


const consolas = document.querySelector('[data-consola]');

consolasService.listaConsolas().then((consola) => {
    consola.forEach(({ id, img, nombre, precio, link }) => {
        const agregarConsola = infoConsolas(id, img, nombre, precio, link);
        consolas.appendChild(agregarConsola)

    })
})


import { juegosSevice } from "../service/service.js"

export const obtenerJuegos = (id, img, nombre, precio, link) => {
    const articulo = document.createElement('article')

    articulo.classList.add('articulos')
    const contenido = `
    
    <img class="populares__img" src="${img}" alt="">
    <p class="productos">${nombre}</p>
    <p><strong>${precio}</strong>
    </p>
    <a href="#" class="ver-mas act">Ver Producto</a>
`


    articulo.innerHTML = contenido

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

    //abrir modal//
   
    let modal = document.querySelectorAll('.modal')[0];
    let modalC = document.querySelectorAll('.modal-container')[0];
    let abrir = articulo.querySelectorAll('.ver-mas')


    //abrir Modal
    abrir.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalC.style.opacity = "1"
            modalC.style.visibility = "visible"
            modal.classList.toggle("modal-close");
        })
    })

    //Cerrar modal

    
    let cerrar = document.querySelectorAll('.close')[0];
    cerrar.addEventListener('click',()=>{
       
        modal.classList.add("modal-close");
            setTimeout(()=>{
                modalC.style.opacity = "0"
                modalC.style.visibility = "hidden"
               
            },900)
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



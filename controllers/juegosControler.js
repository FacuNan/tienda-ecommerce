import { juegosSevice } from "../service/service.js"

export const obtenerJuegos = (id, img, nombre, precio, link) => {
    const articulo = document.createElement('article')

    articulo.classList.add('articulos')
    const contenido = `
    <h1>Star Wars</h1>
    <img class="populares__img" src="${img}" alt="">
    <p class="productos">${nombre}</p>
    <p><strong>${precio}</strong>
    </p>
    <a href="${link}" class="ver-mas">Ver Producto</a>
`


    articulo.innerHTML = contenido

    const buscador = document.querySelector('.buscador')
    buscador.addEventListener("keyup", e => {
        const respuesta = e.target.value

        if (e.key) {
            document.querySelectorAll('.productos').forEach(elemento => {
                elemento.textContent.toLowerCase().includes(respuesta.toLowerCase())
                    ?elemento.parentElement.style.display='block'
                    :elemento.parentElement.style.display='none'
            })

        }
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



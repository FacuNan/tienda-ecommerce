import { consolasService } from "../../service/consolasService.js";

const infoConsolas = (id, img, nombre, precio, link) => {
    const articulo = document.createElement('article')

    articulo.classList.add('articulos');

    const contenido = `
    <h1>Consolas</h1>
    <img class="populares__img" src="${img}">
    <p class="productos">${nombre}</p>
    <p><strong>${precio}</strong>
    </p>
    <a href="${link}" class="ver-mas">Ver Producto</a>
   `

    articulo.innerHTML = contenido

    const buscador = document.querySelector('.buscador')
   
    buscador.addEventListener("keyup", e => {

        const respuesta = e.target.value

        console.log(respuesta)
        if(e.key) {
            document.querySelectorAll('.productos').forEach(elemento => {
                elemento.textContent.toLowerCase().includes(respuesta.toLowerCase())
                    ?elemento.parentElement.style.display='block'
                    :elemento.parentElement.style.display='none'
                
            })

        }
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


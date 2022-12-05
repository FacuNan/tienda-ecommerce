
const listaConsolas = () => {
    return fetch(' http://localhost:3000/consolas').then((respuesta) => respuesta.json())
}


const agregarConsolas = (img, nombre, precio, link) => {
    return fetch('http://localhost:3000/consolas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ img, nombre, precio, link, id: uuid.v4() })
    }).then((respuesta) => {
        console.log(respuesta)
    })
}

const detallesConsolas = (id) => {
    return fetch(`http://localhost:3000/consolas/${id}`).then((respuesta) => respuesta.json())
}

const actualizarConsola = (id, img, nombre, precio, link) => {
    return fetch(`http://localhost:3000/consolas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: ({ id, img, nombre, precio, link })
    }).then((respuesta) => console.log(respuesta))
}


export const consolasService = {
    listaConsolas,
    agregarConsolas,
    detallesConsolas,
    actualizarConsola

}
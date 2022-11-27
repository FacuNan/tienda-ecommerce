const listaVariados = () => {
    return fetch('http://localhost:3000/variados').then((respuesta) => respuesta.json())
}

const agregarVariado = (id, img, nombre, precio, link) => {
    return fetch('http://localhost:3000/variados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ img, nombre, precio, link, id: uuid.v4() })
    }).then((respuesta) => console.log(respuesta))
}

const detallesVariados = (id) => {
    return fetch(`http://localhost:3000/variados/${id}`).then((respuesta) => respuesta.json())
}

const actualizarVariados = (id, img, nombre, precio, link) => {
    return fetch(`http://localhost:3000/variados/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, img, nombre, precio, link })

    }).then((respuesta) => console.log(respuesta))
}

const eliminarVariado = (id) => {
    return fetch(`http://localhost:3000/variados/${id}`,
        'DELETE')
}

export const variadosService ={
    listaVariados,
    agregarVariado,
    detallesVariados,
    actualizarVariados,
    eliminarVariado
}
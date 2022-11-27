const listaJuegos = () => {
    return fetch('http://localhost:3000/starWars').then((respuesta) => respuesta.json())
}


const agregarJuego = (img, nombre, precio, link) => {
    return fetch('http://localhost:3000/starWars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ img, nombre, precio, link, id: uuid.v4() })

    }).then((respuesta) => {
        console.log(respuesta)
    })
}

const detallesJuego = (id) => {
    return fetch(`http://localhost:3000/starWars/${id}`).then((respuesta) => respuesta.json())
}


const actualizarJuego = (id, img, nombre, precio, link) => {
    return fetch(`http://localhost:3000/starWars/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, img, nombre, precio, link })
    }).then((respuesta) => {
        console.log(respuesta)
    })
}


const eliminarJuego=(id)=>{
return fetch(`http://localhost:3000/starWars/${id}`,{
    method: 'DELETE'
})
}





export const juegosSevice = {
    listaJuegos,
    agregarJuego,
    detallesJuego,
    actualizarJuego,
    eliminarJuego
}
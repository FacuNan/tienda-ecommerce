export function valida(input) {

    const tipoInput = input.dataset.tipo;


    if (input.validity.valid) {
        input.parentElement.classList.remove('input-error');
        const span = input.parentElement.querySelector('.mensajeError');
        span.style.display = 'none';

    } else {
        input.parentElement.classList.add('input-error')
        const span = input.parentElement.querySelector('.mensajeError');

        span.innerText = mostrarMensajeDeError(tipoInput, input) 
        span.style.display = 'inherit';
    }

}

const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch", "customError"]


const mensajeDeError = {
    email: {
        valueMissing: "El campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },

    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "debe contener un minimo de 6 hasta 12 caracteres, debe contener una letra mayuscula, una minuscula y un número"
    }
}

    function mostrarMensajeDeError(tipoInput, input) {

        let mensaje = '';
    
        tipoDeErrores.forEach((error) => {
            if (input.validity[error]) {
                console.log(tipoInput, error)
                console.log(input.validity[error]);
                console.log(mensajeDeError[tipoInput][error]);
    
                mensaje = mensajeDeError[tipoInput][error];
            }
        });
    
        return mensaje;
    
    }


export function valida(input){
   const tipoInput = input.dataset.tipo;
   console.log(tipoInput)

    if(input.validity.valid){
        input.parentElement.classList.remove('input-error');
        const span= input.parentElement.querySelector('.mensajeError')
        span.style.display='none'
 
    }else{
        input.parentElement.classList.add('input-error')
       const span= input.parentElement.querySelector('.mensajeError')
       span.innerText=mostrarMensajeDeError(tipoInput, input);
       span.style.display='inherit'
    }


}



const tipoDeerrores = [
    "valueMissing", "patternMismatch", 
]




const mensajeDeError ={
    nombre: {
        valueMissing: "este campo no puede estar vacio",
        patternMismatch: "debe contener un minimo de 4 hasta 40 caracteres y contener una letra mayuscula, una minuscula"
    },
    mensaje:{
        valueMissing: "este campo no puede estar vacio",
        patternMismatch: "debe contener un minimo de 4 hasta 120 caracteres, debe contener una letra mayuscula y  una minuscula "
    }
}


function mostrarMensajeDeError(tipoInput, input){
    let mensaje = '';
    tipoDeerrores.forEach((error)=>{
        if(input.validity[error]){
            mensaje = mensajeDeError[tipoInput][error];
        }
    })
   return mensaje

}


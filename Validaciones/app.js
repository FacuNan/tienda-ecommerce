import { valida } from "./validaciones.js"


const inputs = document.querySelectorAll(".contacto");
inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        valida(input.target)
    })
})
const modalC = document.querySelector('[data-form]');
const agregar = document.querySelector('[data-agregar]');
const modalA = document.querySelector('[data-modalA]');
const cerrar= document.querySelector('[data-cerrar]')


agregar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalA.classList.toggle('modal-clos')
    modalC.style.visibility="visible";
    modalC.style.opacity="1"
    

})

cerrar.addEventListener('click', () => {

    modalA.classList.add("modal-clos");
    setTimeout(() => {
        modalC.style.opacity = "0"
        modalC.style.visibility = "hidden"

    }, 900)


})
// Obtener la fecha actual
const currentDate = new Date();
const options = { day: '2-digit', month: 'long', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('es-ES', options);
console.log(formattedDate);

function abrirModal(){
    $('#myModal').modal('show');
    localStorage.setItem('modalOpened', false);
}

function cerrarModal() {
    $('#myModal').modal('hide');
    localStorage.setItem('modalOpened', true);
}
$(document).ready(function(){
    if (localStorage.getItem('modalOpened')== 'true') {
        cerrarModal();
        }
        else{
            console.log(localStorage.getItem('modalOpened'))
            abrirModal();
        }
    });
document.getElementsByClassName('close')[0].addEventListener('click', cerrarModal);
document.getElementById('unete-modal').addEventListener('click', abrirModal);
document.getElementById('fecha').textContent=formattedDate;

const emailInput = document.getElementById('inputCorreo')
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);
    const isValidNumber = /^\d{10}$/.test(emailValue);
    if (isValidEmail) {
    emailInput.setCustomValidity('');
    }else if(isValidNumber){
        emailInput.setCustomValidity('');
    }else {
    emailInput.setCustomValidity('El correo o el número ingresado no es válido');
    }      
});



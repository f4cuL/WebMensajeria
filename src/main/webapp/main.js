let inputNombre = document.querySelector(".nombre");
let inputApellido = document.querySelector(".apellido");
let inputEmail = document.querySelector(".email");
let inputNumero = document.querySelector(".telefono");


function oninputFuncion(input) {
    if (input.value.length > 0 && input.value.length < 20 ) {
        if(input.classList.contains("is-invalid"))
        {
            input.classList.replace("is-invalid","is-valid");
        }
        else
        {
            input.classList.add("is-valid");
        }
        if (hasNumber(input.value)) {
            input.classList.replace("is-valid", "is-invalid");
        }
    }
    else {
        input.classList.add("is-invalid");
    }
}
function oninputEmail() {
    if (inputEmail.value.indexOf("@") != inputEmail.value.lastIndexOf("@")) {
        inputEmail.classList.replace("is-valid", "is-invalid");
    }
    else {
        if (inputEmail.value.length > 0 && inputEmail.value.includes("@")) {
            if (inputEmail.classList.contains("is-invalid"))
            {
                inputEmail.classList.replace("is-invalid", "is-valid");
            }
            else
            {
                inputEmail.classList.replace("is-valid");
            }
        }
        else {
            inputEmail.classList.add("is-invalid");
        }
    }
}

function oninputTelefono() {
    if (inputNumero.value.length > 0 && inputNumero.value.length < 12){
        if (inputNumero.classList.contains("is-invalid"))
        {
            inputNumero.classList.replace("is-invalid", "is-valid");
            verificarBoton()
        }
        else
        {
            inputNumero.classList.add("is-valid");
            verificarBoton()
        }
    }
    else {
        inputNumero.classList.add("is-invalid");
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

function verificarBoton() {

}

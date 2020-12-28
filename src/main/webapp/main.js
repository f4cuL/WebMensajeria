let inputNombre = document.querySelector(".nombre");
let inputApellido = document.querySelector(".apellido");
let inputEmail = document.querySelector(".email");
let inputNumero = document.querySelector(".telefono");
let boton = document.querySelector(".btn");


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
    verificarBoton()
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
                inputEmail.classList.add("is-valid");
            }
        }
        else {
            inputEmail.classList.add("is-invalid");
        }
    }
    verificarBoton()
}

function oninputTelefono() {
    if (inputNumero.value.length > 0 && inputNumero.value.length < 12){
        if (inputNumero.classList.contains("is-invalid"))
        {
            inputNumero.classList.replace("is-invalid", "is-valid");
        }
        else
        {
            inputNumero.classList.add("is-valid");
        }
    }
    else {
        inputNumero.classList.add("is-invalid");
    }
    verificarBoton()
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

function verificarBoton() {
    if(inputEmail.classList.contains("is-valid") && inputNumero.classList.contains("is-valid") && inputNombre.classList.contains("is-valid") && inputApellido.classList.contains("is-valid"))
    {
        console.log("Son validos");
        boton.classList.remove("disabled");
        
    }
    else
    {
        console.log("Uno o ambos es invalido");
        boton.classList.add("disabled");
    }
}

function SoloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";

especiales = [8,13];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 return false;
}
}
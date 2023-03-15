// Iniciasion de variables y opjetos 
const nickInput = document.getElementById("nick");
const emailInput = document.getElementById("email");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");
//comprobar si hay algun error
if(sessionStorage.getItem("error")!=null){
    error.innerText = sessionStorage.getItem("error");
    sessionStorage.removeItem("error");
}
//funciones 
function  comprobarForm(event){
    if(nickInput.value.length==0){
        console.log("no tien nick");
        nickInput.focus();
        error.innerText="¡El campo Nick No puede estar vacio!"
        event.preventDefault();
        return false;
    }else if(tamanoInput.value=="0"){
        console.log("Agrege EL tamaño del juego");
        tamanoInput.focus();
        error.innerText="¡Debe Selecionar un tamaño de juego!"
        event.preventDefault();
        return false;
    }
    datosUsuario(nickInput, emailInput, tamanoInput);
    historicoUsuario(nickInput,);
    return true;
}

formEntrada.addEventListener("submit", comprobarForm);
datosGeolocalizacion();

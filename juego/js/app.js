// Iniciasion de variables y opjetos 
var nickInput;
var emailInput;
var tamanoInput;
var formEntrada;
var error;
var avtarItems;
var itemImg;
var avatarCont;
//comprobar si hay algun error

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
function moviendoImg(event){
    itemImg=event.target;
    
}
function cambiarImg(event){
    avatarCont.src=itemImg.src;
}

function donCargado(){
    nickInput = document.getElementById("nick");
    emailInput = document.getElementById("email");
    tamanoInput = document.getElementById("tamano");
    formEntrada = document.getElementById("formEntrada");
    error = document.getElementById("error");

    if(sessionStorage.getItem("error")!=null){
        error.innerText = sessionStorage.getItem("error");
        sessionStorage.removeItem("error");
    }
    formEntrada.addEventListener("submit", comprobarForm);

    //evento del DyD 
    avtarItems = document.getElementsByClassName("avatarImgItem");
    for(let item of avtarItems){
        item.addEventListener("dragstart", moviendoImg)
    }
    avatarCont=document.getElementById("avatarImg");
    avatarCont.addEventListener("dragover", e=>{e.preventDefault()})
    avatarCont.addEventListener("drop", cambiarImg)
}

document.addEventListener("DOMContentLoaded", donCargado);

datosGeolocalizacion();

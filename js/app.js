// Iniciasion de variables y opjetos 
const nickInput = document.getElementById("nick")
const tamanoInput = document.getElementById("tamano")
const formEntrada = document.getElementById("formEntrada")

//funciones 
function  comprobarForm(event){
    if(nickInput.value.length==0){
        console.log("no tien nick");
        nickInput.focus();
        event.preventDefault();
    }else if(tamanoInput.value=="0"){
        console.log("Agrege EL tamaño del juego");
        tamanoInput.focus();
        event.preventDefault();
    }
}

formEntrada.addEventListener("submit", comprobarForm);
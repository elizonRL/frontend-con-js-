
var nick;
function datosUsuario(nick){
    sessionStorage.setItem("nick", nick.value);
}
function getDatosUsuario(){
   nick = sessionStorage.getItem("nick");
    console.log(nick);
}

function comprobarDatosUsuario(){
    if(nick == null){
        sessionStorage.setItem("error", "NO has Iniciado Sección");
        return false;
    }
    return true;
}
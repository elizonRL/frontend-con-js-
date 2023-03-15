
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
function historicoUsuario(nick){
    let historicoStorage = localStorage.getItem("historico");
    let historico = [];
    if(historicoStorage==null){
        historico;
    }else{
        historico= JSON.parse(historicoStorage);
    }
    let historicoUsuario ={
        usuario : nick.value,
        fecha : Date.now()
    }
    historico.push(historicoUsuario);
    localStorage.setItem("historico", JSON.stringify(historico));

}
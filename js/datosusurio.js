
var nick;
var email;
var tamano;
var geolocalizacionText;

function datosUsuario(nick, email, tamano){
    sessionStorage.setItem("nick", nick.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("tamano", tamano.value);
    sessionStorage.setItem("geolocalizacionTxt", geolocalizacionText);
}
function getDatosUsuario(){
   nick = sessionStorage.getItem("nick");
   email = sessionStorage.getItem("email");
   tamano = sessionStorage.getItem("tamano");
   
    console.log(nick);
}

function comprobarDatosUsuario(){
    if(nick == null){
        sessionStorage.setItem("error", "NO has Iniciado Sección");
        return false;
    }
    return true;
}
function datosGeolocalizacion(){
    if(!navigator.geolocation){
        geolocalizacionText = "Error no Se encuentra la geoLocalizacion";
    }else{
        navigator.geolocation.getCurrentPosition(
            (position)=>{geolocalizacionText="Latitud: "+ position.coords.latitude+ "Longitud: "+position.coords.longitude;},
            ()=>{geolocalizacionText = "Error no se encuentra la posicion ";}
        )
    }
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
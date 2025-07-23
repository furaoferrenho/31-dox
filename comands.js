
function comandos(){
    var prox = document.getElementById('comando').value;
var comander = prox.split(" ");
switch(comander[0]){
    case "calculo":
     catalogo(comander[1]);
    break;
    case "reload":
        window.reload();
        break;
        default:
   alert("comando não encontrado");
        break;
}
}
function catalogo(sites){
switch(sites){
    case "fatores":
        window.open("calculo fatores 1.1\\Fatores.html");
        break;
        case "pib":
       window.open("https://furaoferrenho.github.io/ADM-2-C-sui-a-geo/");
       break;
}
}

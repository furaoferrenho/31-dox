
function comandos(){
    var prox = document.getElementById('comando').value;
var comander = prox.split(" ");
switch(comander[0]){
    case "calculo":
     catalogo(comander[1], comander);
    break;
        default:
   alert("oxi");
        break;
}
}
function catalogo(sites, comando){
switch(sites){
    case "fatores":
        window.open("calculo fatores 1.1\\Fatores.html")
        break;
        case "pib":
       window.open("https://furaoferrenho.github.io/ADM-2-C-sui-a-geo/")
       break;
}
}

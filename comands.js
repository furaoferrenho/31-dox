
function comandos(){
    var prox = document.getElementById('comando').value;
var comander = prox.split(" ");
switch(comander[0]){
    case "calculo":
     catalogo(comander[comander.length -1]);
    break;
    case "reload":
        window.reload();
        break;
        case "git":
            origem(comander[comander.length -1 ])
            break;

        case "honk":
            pato(comander[comander.lehng -1 ])
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
function origem(arquivo){
switch(arquivo){
    case "fatores":
        window.open("https://github.com/furaoferrenho/31-dox");
        break;
        case "pib":
            window.open("https://github.com/furaoferrenho/ADM-2-C-sui-a-geo")
            break;
}
}
function pato(Honks){
switch( Honks){
    default:
        alert("honk");
        break;
}
}

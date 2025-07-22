var numero = 0
function vamo(){

    numero = document.getElementById("numero").value; //valor de entrada

    if (numero == 0){
        alert(" por favor coloque um numero")
    }
    else if (numero < 0){
        alert("por favor coloque um numero positivo")
    }
   else{
    document.getElementById('resultado').innerText = numeros(numero);
   }
};


function numeros(In){
    var fatores=[];
    
 for (let i =1; i<=In; i++) {
 if(Number.isInteger(In/i)){
      fatores.push(i);
 }
}
return fatores;
}

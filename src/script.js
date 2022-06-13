let pregunta = prompt("¿Desea calcular el monto en cuotas? a) Si - b) No")

if(pregunta == "a"){
    function calcularCuotas(){
    let entrada = +prompt("Ingrese el monto que desea calcular: ");
    for(let i = 3; i <= 12; i+3){
    alert("Monto a pagar en "+i+" cuotas = "+entrada/i);
    i+=3;
} 
}
}else{
    alert("No desea calcular monto en cuotas")
}

calcularCuotas();
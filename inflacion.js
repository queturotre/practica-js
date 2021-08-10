function calcularPrecioFinal(plataInicial, inflacion, time){
    const infTotal = (plataInicial * (1+(inflacion / 100)) ** time / plataInicial) - 1;
    const descuento = infTotal * plataInicial;
    const plataFinal = plataInicial - descuento;
    return plataFinal;
}

function calcularTotal(){
    const initialMoney = document.getElementById("dineroInicial");
    const plataIn = initialMoney.value;
    const inflacionTotal = document.getElementById("porciento");
    const infFinal = inflacionTotal.value;
    const tiempoTotal = document.getElementById("tiempo");
    const tiempo = tiempoTotal.value;
    
    const total = calcularPrecioFinal(plataIn, infFinal, tiempo);
    const perdida = plataIn - total;
    const texto = document.getElementById("jstexto");
    texto.innerHTML = "Tu poder de compra después de "+tiempo+" años, con inflación del "+infFinal+"% es: $"+Math.ceil(total)+"<br />La pérdida de poder adquisitivo total fue: "+Math.floor(perdida);
}
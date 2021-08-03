function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function calcularMedia(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if(esPar(lista.length)){
        const elem1 = lista[mitadLista];
        const elem2 = lista[mitadLista - 1];
        const promedioElementos = calcularMedia([elem1, elem2]);
        mediana =  promedioElementos;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}

lista = [80, 50, 5000, 400000000, 8, 12];


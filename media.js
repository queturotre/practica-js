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

function calcularModa(lista){
    const listaCount = {};

    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda;
}

lista = [1, 2, 3, 3, 4, 6, 2, 1, 1, 2, 2, 5];

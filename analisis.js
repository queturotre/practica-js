//Saca sólo el salario del array colombia en salarios.js
salariosCol = colombia.map(
    function(persona){
        return persona.salario;
    }
);

//Organiza los salarios
const salarioColSorted = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
)

//True or False
function esPar(numero){
    return (numero % 2 == 0);
}

//Calcula el total de los salarios y los divide entre su longitud
function calcularMedia(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Retorna la mediana del array que sea
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad - 1];
        const mediana = calcularMedia([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneral = medianaSalarios(salarioColSorted)

//Mediana del top 10
const spliceStart = (salarioColSorted.length * 90) / 100;
const salarioColTop10 = salarioColSorted.slice(spliceStart, salarioColSorted.length);
 
console.log({
    medianaGeneral, 
    salarioColTop10
});

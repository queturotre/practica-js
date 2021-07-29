//Código del cuadrado
    function perimetroCuadrado (lado){
        return lado * 4;
    }

    function areaCuadrado (lado){
        return lado * lado;
    }


//Código del triángulo
    function periTriangulo (base, lado1, lado2){
        return base + lado1 + lado2;
    }
    function areaTriangulo (base, altura){
        return (base * altura) / 2;
    }


// Código del círculo
    const pi = Math.PI;
    function areaCirculo (radio){
        return (radio * radio) * pi;
    }

    function diametroCirculo(radio){
        return radio * 2;
    }

    function perimetroCirculo (radio){
        const diametro = diametroCirculo(radio);
        return diametro * pi;
    }

// Funciones HTML
function calcPeriCuadra(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: "+perimetro+"cm");
}

function calcAreaCuadra(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado mide "+area+"cm cuadrados.");
}

function calcPeriTriangulo(){
    const inputBase = document.getElementById("inputBase");
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    
    const valueBase = Number(inputBase.value);
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const perimeTriangulo = periTriangulo(valueBase, value1, value2);
    alert("El perímetro del triángulo es: "+perimeTriangulo+"cm");
}

function calcAreaTriangulo(){
    const inputBase = document.getElementById("inputBase");
    const inputAltura = document.getElementById("inputAltura");

    const valueBase = Number(inputBase.value);
    const valueAltura = Number(inputAltura.value);

    const areaTri = areaTriangulo(valueBase, valueAltura);
    alert("El área del triángulo es: "+areaTri+"cm cuadrados");
}

function calcPeriCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es: "+perimetro+"cm")
}
function calcAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El área del círculo es: "+area+"cm cuadrados.");
}
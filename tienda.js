function descontar(origRate, discount){
    const discRatePercentage = 100 - discount;
    const discRate = (origRate * discRatePercentage/100);
    return discRate;
}

function calcularDescuento(){
    const inputPrice = document.getElementById("inputPrice");    
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case "tablillas":
            descuento = 15;
        break;
        case "ajedrezinho":
            descuento = 30;
        break;
        case "malong_come_mierda":
            descuento = 25;
        break;
        default:
            descuento = 0;
        break;
    }

    const precioDescuento = descontar(priceValue, descuento);

    const texto = document.getElementById("jstexto");
    texto.innerText = "El precio descontado es: $"+precioDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];
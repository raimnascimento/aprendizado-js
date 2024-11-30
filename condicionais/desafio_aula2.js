const precoEtanol = 6.90;
const precoGasolina = 5.79;
const gastoMedioCarroPorKm = 10;
let distanciaKm = 100;

let tipoCombustivel =  'etanol';

function calculandoViagem() {
    const consumoTotal = distanciaKm / gastoMedioCarroPorKm;
    let precoPorLitro;

    if (tipoCombustivel === 'gasolina') {
        precoPorLitro = precoGasolina;
    } else {
        precoPorLitro = precoEtanol;
    }

    let gastoTotal = consumoTotal * precoPorLitro;
    
    console.log(`O gasto total será de ${gastoTotal} reais`);
}

calculandoViagem();


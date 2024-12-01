class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(distanciaKm, valorCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * valorCombustivel;
    }
}

const civic = new Carros('Honda', 'Preto', 1 / 12);
console.log(`O gasto durante o percurso será de ${civic.calcularViagem(70, 5).toFixed(2)}`);

const palio = new Carros('Fiat', 'Prata', 1 / 10);
console.log(`O gasto durante o percurso será de ${palio.calcularViagem(70, 5).toFixed(2)}`);


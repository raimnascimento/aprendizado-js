
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

// para simplificar o codigo. é como a ordem de precedencia, primeiro ira resolver, e em seguida ja chama ela
// funcao imediatamente invocada, cria e já executa
(function main() {
    const peso = 104;
    const altura = 1.77;

    const imc = calcularImc(peso, altura); 
    console.log(classificarImc(imc));
})();








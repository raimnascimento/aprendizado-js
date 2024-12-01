// IMC - Índice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.   
// Fórmula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.   

// IMC em adultos Condição:

// Abaixo de 18.5: Abaixo do peso;
// Entre 18.5 e 25: Peso normal;
// Entre 25 e 30: Acima do peso;
// Entre 30 e 40: Obeso;
// Acima de 40: Obesidade Grave;

const peso = 104;
const altura = 1.77;
const calculoImc = peso / Math.pow(altura, 2);

console.log(calculoImc.toFixed(1));

if (calculoImc < 18.5) {
    console.log('Abaixo do peso');
} else if (calculoImc >= 18.5 && calculoImc < 25) {
    console.log('Peso normal');
} else if (calculoImc >= 25 && calculoImc < 30) {
    console.log('Acima do peso');
} else if (calculoImc >= 30 && calculoImc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}